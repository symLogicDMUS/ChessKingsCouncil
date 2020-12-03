import React from "react";
import Button from "@material-ui/core/Button";
import {useStyles} from "./MuiButton.jss";

export function MuiButton({ style, theme, clickMethod, text, variant, isDisabled }) {

    const classes = useStyles({style: style, theme: theme})

    return (
        <Button variant={variant} className={classes.button} onClick={clickMethod} disabled={isDisabled}>
            {text}
        </Button>
    );
}
