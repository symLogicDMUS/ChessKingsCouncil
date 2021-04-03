import React from "react";
import { Close } from "./Close";
import Box from "@material-ui/core/Box";
import {ClickAwayListener, Typography} from "@material-ui/core";
import { useStyles } from "./StandardModal.jss";
import CloseIcon from "@material-ui/icons/Close";

export function StandardModal({ text, title, theme, closeClick, children }) {
    const classes = useStyles({ theme: theme });

    return (
        <div className={classes.modal}>
            <ClickAwayListener
                onClickAway={closeClick}
                mouseEvent="onMouseDown"
                touchEvent="onTouchStart"
            >
                <Box className={classes.window}>
                <span className={classes.title}>
                    {title}
                </span>
                    <Typography
                        paragraph
                        align="center"
                        className={classes.paragraph}
                    >
                        {text}
                    </Typography>
                    <span className={classes.buttons}>{children}</span>
                </Box>
            </ClickAwayListener>
        </div>
    );
}