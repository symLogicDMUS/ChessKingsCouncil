import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton({ onClick, classesObj, classProp, addedClassProp, theme, variant, startIcon, endIcon, isDisabled, children}) {
    const classes = useStyles({ theme: theme });
    return (
        <>
            <Button
                onClick={onClick}
                variant={variant}
                className={clsx(classes.button, {
                    [classProp]: classProp,
                    [addedClassProp]: addedClassProp,
                })}
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