import React, { useEffect, useReducer } from "react";
import Box from "@material-ui/core/Box";
import { MuiCheckbox } from "../MuiCheckbox";
import { MuiButton as Button } from "../MuiButton";
import {fontSize001685} from "../../styles/fontSizes.jss";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { MuiDeleteButton as DeleteButton } from "../MuiDeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { button, useStyles } from "./ImgGrid.jss";
import { getImgItems } from "./getImgItems";
import { reducer } from "./reducer.red";

export function ImgGrid(props) {
    let [state, dispatch] = useReducer(
        reducer,
        getImgItems(
            props.imgDict,
            props.setChoice,
            props.imgNameChoice,
            props.searchText,
            props.defaultChecked,
            props.screenCase,
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
            screenCase: props.screenCase,
            theme: props.theme,
        });
    }, [props.imgDict, props.imgNameChoice, props.searchText, state.showNames, props.theme]);

    const classes = useStyles({
        theme: props.theme,
        fontSize: fontSize001685,
        rootStyle: props.rootStyle,
        itemWindowStyle: props.itemWindowStyle,
    });

    return (
        <div className={`scrollbar-${props.theme}`}>
            <div className={classes.window}>
                <Box className={classes.top_flexbox}>{props.topFlexbox}</Box>
                <Box className={classes.title_flexbox}>{props.title}</Box>
                <Box className={classes.img_choices_border}>
                    <Box className={classes.image_choices}>
                        {state.imgItems}
                    </Box>
                </Box>
                <Box className={classes.bottom_flexbox}>
                    <Button
                        onClick={props.onOkClick}
                        isDisabled={props.imgNameChoice === null}
                        style={{
                            ...button(fontSize001685),
                            marginRight: "1em",
                        }}
                        variant="outlined"
                        theme={props.theme}
                        startIcon={<CheckCircleOutlineIcon style={{fontSize: fontSize001685}} />}
                    >
                        Ok
                    </Button>
                    <DeleteButton
                        onAcceptDelete={props.onDeleteClick}
                        modalTitle={props.confirmDeleteMessage}
                        isDisabled={props.imgNameChoice === null}
                        style={{
                            ...button(fontSize001685),
                            marginLeft: "1em",
                        }}
                        startIcon={<DeleteForeverIcon style={{fontSize: fontSize001685}} />}
                        theme={props.theme}
                        variant="outlined"
                    />
                    <MuiCheckbox
                        theme={props.theme}
                        style={{ fontSize: fontSize001685 }}
                        rootStyle={{ marginLeft: "2.15em" }}
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
