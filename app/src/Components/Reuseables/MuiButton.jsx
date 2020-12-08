import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton({ style, theme, onClick, variant, isDisabled, children}) {
    const classes = useStyles({ style: style, theme: theme });

    return (
        <Button
            variant={variant}
            className={classes.button}
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </Button>
    );
}