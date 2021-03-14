import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ListItem.jss";

export function ListItem({
    theme,
    onClick,
    children,
}) {
    const classes = useStyles({ theme });

    return (
        <Typography
            className={classes.list_item}
            onClick={onClick}
        >
            {children}
        </Typography>
    );
}
