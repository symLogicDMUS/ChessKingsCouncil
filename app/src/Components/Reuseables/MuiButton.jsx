import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton({ onClick, classesObj, style, theme, variant, startIcon, endIcon, isDisabled, children}) {
    const classes = useStyles({ style: style, theme: theme });
    return (
        <>
            <Button
                onClick={onClick}
                variant={variant}
                className={classes.button}
                classes={classesObj}
                disabled={isDisabled}
                startIcon={startIcon}
                endIcon={endIcon}
            >
                {children}
            </Button>
        </>
    );
}