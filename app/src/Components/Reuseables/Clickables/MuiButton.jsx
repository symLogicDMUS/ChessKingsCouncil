import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton(props) {
    const classes = useStyles({ theme: props.theme });
    return (
        <div className={classes.rootClassProp}>
            <Button
                onClick={props.onClick}
                variant={props.variant}
                className={clsx(classes.button, {
                    [props.classProp]: props.classProp,
                    [props.rootClassProp]: props.rootClassProp,
                    [props.addedClassProp]: props.addedClassProp,
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