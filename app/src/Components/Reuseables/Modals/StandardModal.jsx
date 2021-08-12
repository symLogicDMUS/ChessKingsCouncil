import React from "react";
import { Close } from "./Close";
import Box from "@material-ui/core/Box";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@material-ui/core";
import { useStyles } from "./StandardModal.jss";

export function StandardModal({ text, title, theme, closeClick, children }) {
    const classes = useStyles({ theme: theme });

    return (
        <Dialog
            open={true}
            classes={{
                paper: classes.window,
                backdrop: classes.backdrop,
            }}
            className={classes.root}
            onBackdropClick={closeClick}
        >
            <Box className={classes.top_area}>
                <Close
                    onClick={closeClick}
                    className={classes.close}
                    iconClassName={classes.close_icon}
                    theme={theme}
                />
            </Box>
            <DialogTitle className={classes.title}>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText className={classes.paragraph}>
                    {text}
                </DialogContentText>
                <DialogActions>{children}</DialogActions>
            </DialogContent>
        </Dialog>
    );
}
