import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import MediaQuery from "react-responsive/src";
import { Dialog } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { DialogTitle } from "@material-ui/core";
import { DialogActions } from "@material-ui/core";
import { DialogContent } from "@material-ui/core";
import { SeeMore } from "../../UserInput/SeeMore";
import { FormControlLabel } from "@material-ui/core";
import { MuiButton } from "../../Clickables/MuiButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { HelpContext } from "../../../../Context/HelpContext";
import { UserContext } from "../../../../Context/UserContext";
import { reducer } from "./HelpSlideshow.red";
import { useStyles } from "./HelpSlideshow.jss";
import Button from "@material-ui/core/Button";
import {themes} from "../../../styles/themes/themes.jss";

export function HelpSlideshow(props) {
    const { currentPage, initialState, title, theme, children, ...other } =
        props;

    const uid = useContext(UserContext);
    const { help, helpDispatch } = useContext(HelpContext);

    const [slideshow, setSlideshow] = useState(false);
    useEffect(() => {
        if (!uid && help[currentPage]) {
            setSlideshow(true);
            helpDispatch({
                type: "update-help",
                pageName: currentPage,
                value: false,
            });
        }
    }, [currentPage]);

    const [state, dispatch] = useReducer(reducer, initialState);

    const classes = useStyles({ theme: theme });

    const sm = useMediaQuery("(max-width: 420px)");

    const onClose = () => {
        setSlideshow(false);
        helpDispatch({
            type: "update-help",
            pageName: currentPage,
            value: false,
        });
    };

    const disablePopupHelp = () => {
        helpDispatch({ type: "disable-help" });
    };

    let isFirstSlide = false, isLastSlide = false;
    if (state.pos === 0) isFirstSlide = true;
    if (state.pos === state.numSlides - 1) isLastSlide= true;

    return (
        <Dialog
            className={classes.dialog}
            onBackdropClick={onClose}
            open={slideshow && children}
            fullScreen={sm}
            {...other}
        >
            <DialogTitle className={classes.color}>{title}</DialogTitle>
            <DialogContent className={classes.color}>
                {children[state.pos]}
            </DialogContent>
            <DialogActions className={classes.color}>
                {isFirstSlide || isLastSlide ? (
                    <>
                        <MediaQuery maxWidth={367}>
                            <SeeMore theme={theme}>
                                <FormControlLabel
                                    label={
                                        <Typography className={classes.text}>
                                            No Help Windows
                                        </Typography>
                                    }
                                    labelPlacement="start"
                                    control={
                                        <Checkbox
                                            onClick={disablePopupHelp}
                                            className={classes.text}
                                            name="checkbox"
                                        />
                                    }
                                />
                            </SeeMore>
                        </MediaQuery>
                        <MediaQuery minWidth={367}>
                            <FormControlLabel
                                label="No Help"
                                labelPlacement="start"
                                control={
                                    <Checkbox
                                        onClick={disablePopupHelp}
                                        name="checkbox"
                                    />
                                }
                            />
                        </MediaQuery>
                    </>
                ) : null}
                {! isFirstSlide ? (
                    <Button
                        theme={theme}
                        variant={isLastSlide ? "text" : "contained"}
                        style={{
                            color: isLastSlide ? themes[theme].button_fill : themes[theme].button_text,
                            background: isLastSlide ? "unset" : themes[theme].button_fill,
                        }}
                        startIcon={
                            <NavigateBeforeIcon
                                style={{color: isLastSlide ? themes[theme].button_fill : themes[theme].button_text}}
                            />
                        }
                        onClick={() => dispatch({ type: "decrement" })}
                    >
                        Previous
                    </Button>
                ) : null}
                {! isLastSlide ? (
                    <Button
                        theme={theme}
                        variant={isLastSlide ? "text" : "contained"}
                        style={{
                            color: isLastSlide ? themes[theme].button_fill : themes[theme].button_text,
                            background: isLastSlide ? "unset" : themes[theme].button_fill,
                        }}
                        endIcon={
                            <NavigateNextIcon
                                style={{color: isLastSlide ? themes[theme].button_fill : themes[theme].button_text}}
                            />
                        }
                        onClick={() => dispatch({ type: "increment" })}
                    >
                        Next
                    </Button>
                ) : null}
                <Button
                    theme={theme}
                    variant={isLastSlide ? "contained" : "text"}

                    style={{
                        color: isLastSlide ? themes[theme].button_text : themes[theme].button_fill,
                        background: isLastSlide ? themes[theme].button_fill : "unset",
                    }}
                    startIcon={
                        <CheckCircleOutlineIcon
                            style={{color: isLastSlide ? themes[theme].button_text : themes[theme].button_fill}}
                        />
                    }
                    onClick={onClose}
                >
                    Done
                </Button>
            </DialogActions>
        </Dialog>
    );
}
