import React, {useReducer} from "react";
import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {fontSize002} from "../../../styles/fontSizes.jss";
import {close_icon} from "../../Modals/StandardModal.jss";
import {MuiButton} from "../../Clickables/MuiButton";
import "../../../styles/scrollbar.scss";
import {Close} from "../../Modals/Close";
import {reducer} from "./HelpSlideshow.red";
import {useStyles} from "./HelpSlideshow.jss";

export function HelpSlideshow({initialState, title, onClose, theme, children}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const classes = useStyles({theme: theme});
    return (
        <div className={`scrollbar-${theme}`}>
            <div className={classes.modal}>
                <div className={classes.window}>
                    <Box className={classes.top_flexbox}>
                        <Box className={classes.x_symbol_flexbox}>
                            <Close onClick={onClose} theme={theme} style={close_icon(fontSize002)}/>
                        </Box>
                        <Box className={classes.title_flexbox}>
                            {title}
                        </Box>
                    </Box>
                    <Typography paragraph className={classes.content}>
                        {children[state.pos]}
                    </Typography>
                    <Box className={classes.buttons}>
                        {state.pos !== 0 ? (
                            <MuiButton
                                theme={theme}
                                classesObj={{root: classes.previous_button}}
                                startIcon={ <NavigateBeforeIcon className={classes.button_icon} />}
                                onClick={() => dispatch({type: 'decrement'})}
                            >
                                Previous
                            </MuiButton>
                        ) : null}
                        {state.pos !== (state.numSlides - 1) ? (
                            <MuiButton
                                theme={theme}
                                classesObj={{root: classes.next_button}}
                                endIcon={<NavigateNextIcon className={classes.button_icon} />}
                                onClick={() => dispatch({type: 'increment'})}
                            >
                                Next
                            </MuiButton>
                        ) : null}
                        <MuiButton
                            theme={theme}
                            classesObj={{root: classes.done_button}}
                            startIcon={<CheckCircleOutlineIcon className={classes.button_icon} />}
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