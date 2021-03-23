import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <>
            <Button
                onClick={props.onClick}
                variant={props.variant}
                className={clsx(classes.button, {
                    [props.classProp]: props.classProp,
                    [props.addedClassProp]: props.addedClassProp,
                })}
                classes={props.classesObj}
                disabled={props.isDisabled}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
            >
                {props.children}
            </Button>
        </>
    );
}