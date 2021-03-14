import React from "react";
import Box from "@material-ui/core/Box";
import {Close} from "../../Modals/Close";
import {close_icon} from "../../Modals/StandardModal.jss";
import {fontSize002} from "../../../styles/fontSizes.jss";
import {Typography} from "@material-ui/core";
import {useStyles} from "./HelpSlideshow.jss";
import {MuiButton} from "../../Clickables/MuiButton";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {done_flexbox} from "./HelpSlide.jss";

/**
 * as single page of help slideshow (same component without the next and previous buttons
 * @param theme
 * @param title
 * @param onClose
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function HelpSlide({theme, title, onClose, children}) {
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
                        {children}
                    </Typography>
                    <Box className={classes.top_flexbox} style={done_flexbox()}>
                        <MuiButton
                            theme={theme}
                            classesObj={{root: classes.done_button}}
                            startIcon={<CheckCircleOutlineIcon className={classes.button_icon}/>}
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