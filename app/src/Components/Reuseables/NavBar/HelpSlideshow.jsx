import React, {useReducer} from "react";
import {motion} from "framer-motion";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {fontSize002} from "../../styles/fontSizes.jss";
import {close_icon} from "../StandardModal.jss";
import {MuiButton} from "../MuiButton";
import "../../styles/Scrollbar.scss";
import {Close} from "../Close";
import {reducer} from "./HelpSlideshow.red";
import {
    done_button,
    next_button,
    previous_button,
    useStyles
} from "./HelpSlideshow.jss";

export function HelpSlideshow({initialState, title, onClose, theme, children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const classes = useStyles({theme: theme, fontSize: fontSize002});
    return (
        <div className={`scrollbar-${theme}`}>
            <div className={classes.modal}>
                <div className={classes.window}>
                    <Box className={classes.top_flexbox}>
                        <Close onClick={onClose} theme={theme} style={close_icon(fontSize002)}/>
                    </Box>
                    <Box>{title}</Box>
                    <Typography paragraph className={classes.content}>
                        {children[state.pos]}
                    </Typography>
                    <Box className={classes.buttons}>
                        {state.pos !== 0 ? (
                            <MuiButton
                                theme={theme}
                                style={previous_button(theme)}
                                startIcon={ <NavigateBeforeIcon />}
                                onClick={() => dispatch({type: 'decrement'})}
                            >
                                Previous
                            </MuiButton>
                        ) : null}
                        {state.pos !== (state.numSlides - 1) ? (
                            <MuiButton
                                theme={theme}
                                style={next_button(theme)}
                                endIcon={<NavigateNextIcon />}
                                onClick={() => dispatch({type: 'increment'})}
                            >
                                Next
                            </MuiButton>
                        ) : null}
                        <MuiButton
                            theme={theme}
                            style={done_button(theme)}
                            startIcon={<CheckCircleOutlineIcon />}
                            onClick={onClose}
                        >
                            Done
                        </MuiButton>
                    </Box>
                </div>
            </div>
        </div>
    );
}