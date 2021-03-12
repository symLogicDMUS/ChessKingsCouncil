import React, {useState} from "react";
import Box from "@material-ui/core/Box";
import { MuiCheckbox } from "../Clickables/MuiCheckbox";
import { MuiButton as Button } from "../Clickables/MuiButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { MuiDeleteButton as DeleteButton } from "../Clickables/MuiDeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {MuiSkeleton} from "../Animations/MuiSkeleton";
import {show_names_gen, useStyles} from "./MuiGrid.jss";

export function MuiGrid(props) {

    const classes = useStyles({
        theme: props.theme,
        rootStyle: props.rootStyle,
        itemWindowStyle: props.itemWindowStyle,
    });

    return (
        <div className={`scrollbar-${props.theme}`}>
            <div className={classes.window}>
                <Box className={classes.top_flexbox}>{props.topFlexbox}</Box>
                <Box className={classes.title_flexbox}>{props.title}</Box>
                <Box className={classes.item_choices_border}>
                    {props.loaded ? (
                        <Box className={classes.item_choices}>
                            {props.children}
                        </Box>
                    ) : (
                        <MuiSkeleton classesObj={{root: classes.item_choices}} theme={props.theme} />
                    )}
                </Box>
                <Box className={classes.bottom_flexbox}>
                    <Button
                        onClick={props.onOkClick}
                        isDisabled={props.selectedItem === null}
                        classesObj={{root: classes.ok_button}}
                        variant="outlined"
                        theme={props.theme}
                        startIcon={
                            <CheckCircleOutlineIcon
                                classes={{root: classes.button_icon}}
                            />
                        }
                    >
                        Ok
                    </Button>
                    <DeleteButton
                        onAcceptDelete={props.onDeleteClick}
                        modalTitle={props.confirmDeleteMessage}
                        isDisabled={props.selectedItem === null}
                        classesObj={{root: classes.delete_button}}
                        theme={props.theme}
                        variant="outlined"
                        startIcon={
                            <DeleteForeverIcon
                                classes={{root: classes.button_icon}}
                            />
                        }
                    />
                    <MuiCheckbox
                        theme={props.theme}
                        style={show_names_gen('mobile')}
                        classesObj={{root: classes.show_names}}
                        defaultChecked={props.defaultChecked}
                        onClick={props.toggleShowNames}
                    >
                        Show Names
                    </MuiCheckbox>
                </Box>
            </div>
        </div>
    );
}
