import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ListTitle.jss";

export function ListTitle({ className, theme, children }) {
    const classes = useStyles({ theme });
    return (
        <Typography
            variant="subtitle1"
            className={clsx(classes.list_title, {
                [className]: className,
            })}
        >
            {children}
        </Typography>
    );
}
