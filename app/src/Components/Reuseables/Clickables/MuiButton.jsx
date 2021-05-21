import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton(props) {
    const {onClick, className, children, ...other} = props;

    const classes = useStyles({ theme: props.theme });
    return (
        <div className={classes.className}>
            <Button
                onClick={props.onClick}
                className={clsx(classes.button, {
                    [props.className]: props.className,
                })}
                {...other}
            >
                {props.children}
            </Button>
        </div>
    );
}