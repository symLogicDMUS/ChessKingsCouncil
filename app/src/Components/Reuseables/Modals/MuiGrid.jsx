import React  from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import {MuiCheckbox} from "../Clickables/MuiCheckbox";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {MuiButton as Button} from "../Clickables/MuiButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {MuiDeleteButton as DeleteButton} from "../Clickables/MuiDeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {MuiSkeleton} from "../Animations/MuiSkeleton";
import {useStyles} from "./MuiGrid.jss";

function MuiGrid(props) {
    const {
        loaded,
        theme,
        title,
        className,
        topFlexbox,
        onOkClick,
        onDeleteClick,
        selectedItem,
        defaultChecked,
        toggleShowNames,
        confirmDeleteMessage,
        children,
    } = props;
    
    const classes = useStyles({theme: theme});
    const isThin = useMediaQuery("(max-width: 720px)");

    return (
        <div className={clsx(classes.window, {
            [className]: className,
        })}>
            {topFlexbox}
            {title}
            {loaded ? (
                <Box className={classes.item_choices}>
                    {children}
                </Box>
            ) : (
                <MuiSkeleton classesObj={{root: classes.item_choices}} theme={theme}/>
            )}
            <Box className={classes.bottom_area}>
                <Button
                    onClick={onOkClick}
                    disabled={! selectedItem}
                    isDisabled={selectedItem === null}
                    className={clsx(classes.bottom_button, {[classes.ok_button]: true})}
                    startIcon={<CheckCircleOutlineIcon className={classes.icon}/>}
                    size={isThin ? 'small' : 'medium'}
                    variant="outlined"
                    theme={theme}
                >
                    Ok
                </Button>
                <DeleteButton
                    disabled={! selectedItem}
                    onAcceptDelete={onDeleteClick}
                    modalTitle={confirmDeleteMessage}
                    startIcon={<DeleteForeverIcon className={classes.icon}/>}
                    size={isThin ? 'small' : 'medium'}
                    className={classes.bottom_button}
                    variant="outlined"
                    theme={theme}
                />
                <MuiCheckbox
                    theme={theme}
                    className={classes.show_names_gen}
                    checkboxClassName={classes.show_names_checkbox}
                    defaultChecked={defaultChecked}
                    onClick={toggleShowNames}
                >
                    Show Names
                </MuiCheckbox>
            </Box>
        </div>
    );
}

export default MuiGrid;