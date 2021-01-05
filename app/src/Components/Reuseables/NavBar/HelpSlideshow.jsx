import React, {useReducer} from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {Close} from "../Close";
import {MuiButton} from "../MuiButton";
import {button, close_icon} from "../StandardModal.jss";
import {fontSize} from "../../styles/fontSize.jss";
import "../../styles/Scrollbar.scss";
import {themes} from "../../styles/themes.jss";
import {useStyles} from "./HelpSlideshow.jss";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            if (state.pos === state.numSlides) {
                return {numSlides: state.numSlides, pos: 0}
            }
            return {numSlides: state.numSlides, pos: state.pos + 1};
        case 'decrement':
            if (state.pos === 0) {
                return {numSlides: state.numSlides, pos: state.numSlides - 1}
            }
            return {numSlides: state.numSlides, pos: state.pos - 1};
        default:
            throw new Error();
    }
}

export function HelpSlideshow({initialState, title, onClose, theme, children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const classes = useStyles({theme: theme, fontSize: fontSize});
    return (
        <div className={`scrollbar-${theme}`}>
            <div className={classes.modal}>
                <Box className={classes.window}>
                    <Box className={classes.top_flexbox}>
                        <Close onClick={onClose} theme={theme} style={close_icon(fontSize)}/>
                    </Box>
                    <Box>{title}</Box>
                    <Typography paragraph className={classes.content}>
                        {children[state.pos]}
                    </Typography>
                    <Box className={classes.buttons}>
                        {state.pos !== 0 ? (
                            <MuiButton
                                onClick={() => dispatch({type: 'decrement'})}
                                style={{...button(fontSize), border: `0.05em solid ${themes[theme].outline}`, marginRight: '0.5em'}}
                                startIcon={ <NavigateBeforeIcon />}
                                theme={theme}
                            >
                                Previous
                            </MuiButton>
                        ) : null}
                        {state.pos !== (state.numSlides - 1) ? (
                            <MuiButton
                                onClick={() => dispatch({type: 'increment'})}
                                style={{...button(fontSize), border: `0.05em solid ${themes[theme].outline}`, marginLeft: '0.5em'}}
                                endIcon={<NavigateNextIcon />}
                                theme={theme}
                            >
                                Next
                            </MuiButton>
                        ) : null}
                        <MuiButton
                            onClick={onClose}
                            style={{...button(fontSize), border: `0.05em solid ${themes[theme].outline}`, marginLeft: '1em'}}
                            startIcon={<CheckCircleOutlineIcon />}
                            theme={theme}
                        >
                            Done
                        </MuiButton>
                    </Box>
                </Box>
            </div>
        </div>
    );
}