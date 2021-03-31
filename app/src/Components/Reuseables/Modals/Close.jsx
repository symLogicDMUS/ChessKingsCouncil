import React from "react";
import clsx from "clsx";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {useStyles} from "./Close.jss";

export function Close({onClick, style, className, iconClassName, theme, size}) {

    const classes = useStyles({style: style, theme: theme})

    return (
        <IconButton
            onClick={onClick}
            aria-label="close"
            className={clsx(classes.close, {
                [className]: className,
            })}
            size={size}
        >
            <CloseIcon className={clsx(classes.icon, {
                [iconClassName]: iconClassName,
            })}/>
        </IconButton>
    )
}