import React, {useEffect, useState} from "react";
import {useMediaQuery} from "react-responsive";
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
    const isThin = useMediaQuery({query: '(max-width: 720px)'});

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
                    rootClassProp={classes.bottom_button}
                    addedClassProp={classes.ok_button}
                    size={isThin ? 'small' : 'medium'}
                    variant="outlined"
                    theme={props.theme}
                    startIcon={
                        <CheckCircleOutlineIcon
                            // classes={{root: classes.button_icon}}
                        />
                    }
                >
                    Ok
                </Button>
                <DeleteButton
                    onAcceptDelete={props.onDeleteClick}
                    modalTitle={props.confirmDeleteMessage}
                    isDisabled={props.selectedItem === null}
                    rootClassProp={classes.bottom_button}
                    size={isThin ? 'small' : 'medium'}
                    theme={props.theme}
                    variant="outlined"
                    startIcon={
                        <DeleteForeverIcon
                            // classes={{root: classes.button_icon}}
                        />
                    }
                />
                <MuiCheckbox
                    theme={props.theme}
                    classProp={classes.show_names_gen}
                    defaultChecked={props.defaultChecked}
                    onClick={props.toggleShowNames}
                >
                    Show Names
                </MuiCheckbox>
            </Box>
        </div>
    );
}
