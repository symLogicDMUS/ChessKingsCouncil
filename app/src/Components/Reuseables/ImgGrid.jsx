import React, { useEffect, useReducer, useState } from "react";
import { Close } from "./Close";
import { v4 as uuidv4 } from "uuid";
import Box from "@material-ui/core/Box";
import { MuiCheckbox } from "./MuiCheckbox";
import { fontSize } from "../styles/fontSize.jss";
import Typography from "@material-ui/core/Typography";
import PanoramaIcon from "@material-ui/icons/Panorama";
import { MuiButton as Button } from "./MuiButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { MuiDeleteButton as DeleteButton } from "./MuiDeleteButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ImgChoice } from "./ImgChoice";
import { button, useStyles } from "./ImgGrid.jss";

const getImgItems = (
    imgDict,
    setChoice,
    imgNameChoice,
    showNames,
    screenCase,
    theme
) => {
    let imgItems = [];
    Object.keys(imgDict).forEach((name) => {
        imgItems.push(
            <ImgChoice
                name={name}
                key={uuidv4()}
                theme={theme}
                setChoice={setChoice}
                base64ImgStr={imgDict[name]}
                screenCase={screenCase}
                showName={showNames}
                isSelected={name === imgNameChoice}
            />
        );
    });
    return {
        showNames: showNames,
        imgItems: imgItems,
    };
};

export function reducer(state, action) {
    switch (action.type) {
        case "update":
            return getImgItems(
                action.imgDict,
                action.setChoice,
                action.imgNameChoice,
                state.showNames,
                action.screenCase,
                action.theme
            );
        case "toggle-show-names":
            return { ...state, showNames: !state.showNames };
        default:
            throw new Error();
    }
}

export function ImgGrid(props) {
    let [state, dispatch] = useReducer(
        reducer,
        getImgItems(
            props.imgDict,
            props.setChoice,
            props.imgNameChoice,
            false,
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
            screenCase: props.screenCase,
            theme: props.theme,
        });
    }, [props.imgDict, props.imgNameChoice, state.showNames, props.theme]);

    const classes = useStyles({ theme: props.theme, fontSize: fontSize });

    return (
        <div className={classes.window}>
            <Box className={classes.top_flexbox}>
                <Close
                    theme={props.theme}
                    onClick={props.onClose}
                    style={{ fontSize: fontSize, width: "2em", height: "2em" }}
                />
            </Box>
            <Box className={classes.title_flexbox}>
                <Typography className={classes.title}>{props.title}</Typography>
                <PanoramaIcon className={classes.title_icon} size="large" />
            </Box>
            <Box className={classes.img_choices_border}>
                <Box className={classes.image_choices}>{state.imgItems}</Box>
            </Box>
            <Box className={classes.bottom_flexbox}>
                <Button
                    onClick={props.onOkClick}
                    isDisabled={props.imgNameChoice === null}
                    style={{
                        ...button(fontSize),
                        marginRight: "1em",
                    }}
                    variant="outlined"
                    theme={props.theme}
                    startIcon={<CheckCircleOutlineIcon />}
                >
                    Ok
                </Button>
                <DeleteButton
                    onAcceptDelete={props.onDeleteClick}
                    modalTitle={`Are you sure you want to delete this image? ${props.imgNameChoice}?`}
                    isDisabled={props.imgNameChoice === null}
                    style={{
                        ...button(fontSize),
                        marginLeft: "1em",
                    }}
                    startIcon={<DeleteForeverIcon />}
                    theme={props.theme}
                    variant="outlined"
                />
                <MuiCheckbox
                    theme={props.theme}
                    style={{ fontSize: fontSize }}
                    rootStyle={{ marginLeft: "2.15em" }}
                    onClick={() => dispatch({ type: "toggle-show-names" })}
                >
                    Show Names
                </MuiCheckbox>
            </Box>
        </div>
    );
}
