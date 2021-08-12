import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./Close.jss";

export function CloseTool({
    name,
    updateParent,
    className,
    iconClassName,
    theme,
    size,
}) {
    const classes = useStyles({ theme: theme });

    const onClick = (e) => {
        updateParent(name, e.clientX, e.clientY);
    };

    return (
        <IconButton
            onClick={onClick}
            aria-label="close"
            className={clsx(classes.close, {
                [className]: className,
            })}
            size={size}
        >
            <CloseIcon
                className={clsx(classes.icon, {
                    [iconClassName]: iconClassName,
                })}
            />
        </IconButton>
    );
}
