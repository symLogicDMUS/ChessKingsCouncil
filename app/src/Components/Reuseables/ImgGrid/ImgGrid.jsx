import React, {useEffect, useReducer} from "react";
import Box from "@material-ui/core/Box";
import { MuiCheckbox } from "../MuiCheckbox";
import { MuiButton as Button } from "../MuiButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { MuiDeleteButton as DeleteButton } from "../MuiDeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { getImgItems } from "./getImgItems";
import {MuiSkeleton} from "../MuiSkeleton";
import { reducer } from "./reducer.red";
import {ifIpad, show_names_gen, useStyles} from "./ImgGrid.jss";

export function ImgGrid(props) {
    let [state, dispatch] = useReducer(
        reducer,
        getImgItems(
            props.imgDict,
            props.setChoice,
            props.imgNameChoice,
            props.searchText,
            props.defaultChecked,
            props.theme
        )
    );

    useEffect(() => {
        dispatch({
            type: "update",
            imgDict: props.imgDict,
            setChoice: props.setChoice,
            imgNameChoice: props.imgNameChoice,
            searchText: props.searchText,
            theme: props.theme,
        });
    }, [props.imgDict, props.imgNameChoice, props.searchText, state.showNames, props.theme]);

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
                <Box className={classes.img_choices_border}>
                    {props.loaded ? (
                        <Box className={classes.image_choices}>
                            {state.imgItems}
                        </Box>
                    ) : (
                        <MuiSkeleton classesObj={{root: classes.image_choices}} theme={props.theme} />
                    )}
                </Box>
                <Box className={classes.bottom_flexbox}>
                    <Button
                        onClick={props.onOkClick}
                        isDisabled={props.imgNameChoice === null}
                        classesObj={{root: classes.ok_button}}
                        variant="outlined"
                        theme={props.theme}
                        startIcon={
                            <CheckCircleOutlineIcon
                                classes={{root: classes.button_icon}}
                                style={ifIpad(props.screenCase)}
                            />
                        }
                    >
                        Ok
                    </Button>
                    <DeleteButton
                        onAcceptDelete={props.onDeleteClick}
                        modalTitle={props.confirmDeleteMessage}
                        isDisabled={props.imgNameChoice === null}
                        classesObj={{root: classes.delete_button}}
                        theme={props.theme}
                        variant="outlined"
                        startIcon={
                            <DeleteForeverIcon
                                classes={{root: classes.button_icon}}
                                style={ifIpad(props.screenCase)}
                            />
                        }
                    />
                    <MuiCheckbox
                        theme={props.theme}
                        style={show_names_gen('mobile')}
                        classesObj={{root: classes.show_names}}
                        defaultChecked={props.defaultChecked}
                        onClick={() => dispatch({ type: "toggle-show-names" })}
                    >
                        Show Names
                    </MuiCheckbox>
                </Box>
            </div>
        </div>
    );
}
