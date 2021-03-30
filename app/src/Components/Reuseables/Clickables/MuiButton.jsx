import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <div className={classes.rootClassName}>
            <Button
                onClick={props.onClick}
                variant={props.variant}
                className={clsx(classes.button, {
                    [props.className]: props.className,
                    [props.rootClassName]: props.rootClassName,
                    [props.addedClassName]: props.addedClassName,
                })}
                classes={props.classesObj}
                disabled={props.isDisabled}
                startIcon={props.startIcon}
                endIcon={props.endIcon}
                size={props.size}
            >
                {props.children}
            </Button>
        </div>
    );
}