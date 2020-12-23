import React from "react";
import { Typography } from "@material-ui/core";
import { MuiButton as Button } from "../Reuseables/MuiButton";
import {Close} from "../Reuseables/Close";
import { useStyles, yes_button, no_button, close } from "./ConfirmModal.jss";

export function ConfirmModal({ text, title, theme, yesClick, noClick, closeClick }) {
    const classes = useStyles({ theme });

    return (
        <div className={classes.window}>
            <Close onClick={closeClick} style={close} theme={theme} size={"small"}  />
            <Typography className={classes.title} align={"center"} noWrap={true}>
                {title}
            </Typography>
            <Typography className={classes.paragraph} paragraph={true} align={"center"}>
                {text}
            </Typography>
            <Button onClick={yesClick} style={yes_button} variant={"contained"} theme={theme}>
                Yes
            </Button>
            <Button onClick={noClick} style={no_button} variant={"contained"} theme={theme}>
                No
            </Button>
        </div>
    );
}
