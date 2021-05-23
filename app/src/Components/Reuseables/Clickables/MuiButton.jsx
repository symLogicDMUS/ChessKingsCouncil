import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import { useStyles } from "./MuiButton.jss";

export function MuiButton(props) {
    const {onClick, className, theme, children, ...other} = props;

    const classes = useStyles({ theme: theme });
    return (
        <Button
            onClick={onClick}
            className={clsx(classes.button, {
                [className]: className,
            })}
            {...other}
        >
            {children}
        </Button>
    );
}