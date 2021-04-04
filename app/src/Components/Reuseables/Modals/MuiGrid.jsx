import React  from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {MuiCheckbox} from "../Clickables/MuiCheckbox";
import {MuiButton as Button} from "../Clickables/MuiButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {MuiDeleteButton as DeleteButton} from "../Clickables/MuiDeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {MuiSkeleton} from "../Animations/MuiSkeleton";
import {useStyles} from "./MuiGrid.jss";

export function MuiGrid(props) {
    const classes = useStyles({theme: props.theme});
    const isThin = useMediaQuery("(max-width: 720px)");

    return (
        <div className={clsx(classes.window, {
            [props.className]: props.className,
        })}>
            {props.topFlexbox}
            {props.title}
            {props.loaded ? (
                <Box className={classes.item_choices}>
                    {props.children}
                </Box>
            ) : (
                <MuiSkeleton classesObj={{root: classes.item_choices}} theme={props.theme}/>
            )}
            <Box className={classes.bottom_area}>
                <Button
                    onClick={props.onOkClick}
                    isDisabled={props.selectedItem === null}
                    rootClassName={classes.bottom_button}
                    addedClassName={classes.ok_button}
                    size={isThin ? 'small' : 'medium'}
                    startIcon={<CheckCircleOutlineIcon className={classes.icon}/>}
                    variant="outlined"
                    theme={props.theme}
                >
                    Ok
                </Button>
                <DeleteButton
                    onAcceptDelete={props.onDeleteClick}
                    modalTitle={props.confirmDeleteMessage}
                    isDisabled={props.selectedItem === null}
                    rootClassName={classes.bottom_button}
                    startIcon={<DeleteForeverIcon className={classes.icon}/>}
                    size={isThin ? 'small' : 'medium'}
                    theme={props.theme}
                    variant="outlined"
                />
                <MuiCheckbox
                    theme={props.theme}
                    className={classes.show_names_gen}
                    checkboxClassName={classes.show_names_checkbox}
                    defaultChecked={props.defaultChecked}
                    onClick={props.toggleShowNames}
                >
                    Show Names
                </MuiCheckbox>
            </Box>
        </div>
    );
}
