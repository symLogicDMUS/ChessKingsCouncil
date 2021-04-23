import React from "react";
import Box from "@material-ui/core/Box";
import {Close} from "../../Modals/Close";
import {NavBarAlt} from "../NavBarAlt";
import {Typography} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import TemporaryDrawerButton from "../../Drawers/TemporaryDrawerButton";
import {MuiButton} from "../../Clickables/MuiButton";
import {useStyles} from "./HelpSlideshow.jss";

/**
 * as single page of help slideshow (same component without the next and previous buttons
 * @param theme
 * @param title
 * @param onClose
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function HelpSlide({title, onClose, theme, children}) {
    const classes = useStyles({theme: theme});

    return (
        <div className={classes.window}>
            <Box className={classes.top_area}>
                <TemporaryDrawerButton theme={theme}><NavBarAlt theme={theme} /></TemporaryDrawerButton>
                <Typography className={classes.title} variant='h6' noWrap>{title}</Typography>
                <Close onClick={onClose} theme={theme} />
            </Box>
            <Typography paragraph className={classes.content}>
                {children}
            </Typography>
            <Box className={classes.buttons}>
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
    );
}