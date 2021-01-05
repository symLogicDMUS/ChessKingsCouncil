import React, {useReducer} from "react";
import Box from "@material-ui/core/Box";
import {Close} from "../Close";
import {MuiButton} from "../MuiButton";
import {button, close_icon} from "../StandardModal.jss";
import {fontSize} from "../../styles/fontSize.jss";
import {Typography} from "@material-ui/core";
import "../../styles/Scrollbar.scss";
import {useStyles} from "./HelpSlideshow.jss";

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            if (state.pos === state.numSlides - 1) {
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
                    <Box className={classes.top_flexbox}><Close onClick={onClose} theme={theme}
                                                                style={close_icon(fontSize)}/></Box>
                    <Box>{title}</Box>
                    <Typography paragraph className={classes.content}>
                        {children[state.pos]}
                    </Typography>
                    <Box className={classes.buttons}>
                        {state.pos !== 0 ? (
                            <MuiButton
                                onClick={() => dispatch({type: 'increment'})}
                                style={{...button(fontSize), marginRight: '1em'}}
                                theme={theme}
                            >
                                Previous
                            </MuiButton>
                        ) : null}
                        <MuiButton
                            onClick={() => dispatch({type: 'decrement'})}
                            style={{...button(fontSize), marginLeft: '1em'}}
                            theme={theme}
                        >
                            Next
                        </MuiButton>
                        <MuiButton
                            onClick={onClose}
                            style={{...button(fontSize), marginLeft: '1em'}}
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