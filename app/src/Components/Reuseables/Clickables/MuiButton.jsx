import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <div className={classes.className}>
            <Button
                onClick={props.onClick}
                variant={props.variant}
                className={clsx(classes.button, {
                    [props.className]: props.className,
                    [props.addedClassName]: props.addedClassName,
                })}
                classes={props.classesObj}
                disabled={props.isDisabled}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                style={props.style}
                size={props.size}
            >
                {props.children}
            </Button>
        </div>
    );
}