import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./Close.jss";

export function Close(props) {
    const { onClick, className, iconClassName, theme, ...other } = props;

    const classes = useStyles({ theme });

    return (
        <IconButton
            onClick={onClick}
            aria-label="close"
            className={clsx(classes.close, {
                [className]: className,
            })}
            {...other}
        >
            <CloseIcon
                className={clsx(classes.icon, {
                    [iconClassName]: iconClassName,
                })}
            />
        </IconButton>
    );
}
