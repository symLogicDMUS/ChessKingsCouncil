import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./PageTitle.jss";

export function PageTitle(props) {
    const { theme, className, children, ...other } = props;

    const classes = useStyles({ theme });
    return (
        <Typography
            variant="h6"
            className={clsx(classes.page_title, {
                [className]: className,
            })}
            {...other}
            noWrap
        >
            {children}
        </Typography>
    );
}
