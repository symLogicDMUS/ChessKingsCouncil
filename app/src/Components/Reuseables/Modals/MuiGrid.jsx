import React, {useEffect, useState} from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from "@material-ui/core/Box";
import {MuiCheckbox} from "../Clickables/MuiCheckbox";
import {MuiButton as Button} from "../Clickables/MuiButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {MuiDeleteButton as DeleteButton} from "../Clickables/MuiDeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {MuiSkeleton} from "../Animations/MuiSkeleton";
import {useStyles} from "./MuiGrid.jss";

export function MuiGrid(props) {

    const classes = useStyles({
        theme: props.theme,
        rootStyle: props.rootStyle,
        itemWindowStyle: props.itemWindowStyle,
    });
    const isThin = useMediaQuery("(max-width: 720px)");

    /*removed useEffect from resizing*/

    return (
        <div className={classes.window}>
            {props.topFlexbox}
            {props.title}
            {props.loaded ? (
                <Box className={classes.item_choices}>
                    {props.children}
                </Box>
            ) : (
                <MuiSkeleton classesObj={{root: classes.item_choices}} theme={props.theme}/>
            )}
            <Box className={classes.bottom_flexbox}>
                <Button
                    onClick={props.onOkClick}
                    isDisabled={props.selectedItem === null}
                    rootClassName={classes.bottom_button}
                    addedClassName={classes.ok_button}
                    size={isThin ? 'small' : 'medium'}
                    startIcon={<CheckCircleOutlineIcon/>}
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
                    startIcon={<DeleteForeverIcon/>}
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
