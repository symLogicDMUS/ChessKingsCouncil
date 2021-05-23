import React from "react";
import {MuiButton} from "../../Clickables/MuiButton";
import {Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {useStyles} from "./HelpSlideshow.jss";

/**
 * as single page of help slideshow (same component without the next and previous buttons
 */
export function HelpSlide(props) {
    const {title, onClose, theme, children, ...other} = props;

    const classes = useStyles({theme: theme});

    return (
        <Dialog open={true} onBackdropClick={onClose} {...other}>
            <DialogTitle className={classes.color}>{title}</DialogTitle>
            <DialogContent className={classes.color}>{children}</DialogContent>
            <DialogActions className={classes.color}>
                <MuiButton
                    onClick={onClose}
                    variant={"contained"}
                    startIcon={<CheckCircleOutlineIcon />}
                    theme={theme}
                >
                    Done
                </MuiButton>
            </DialogActions>
        </Dialog>
    );
}