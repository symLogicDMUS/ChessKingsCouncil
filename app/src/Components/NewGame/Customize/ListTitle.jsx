import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ListTitle.jss";

export function ListTitle({theme, children}) {
    const classes = useStyles({theme});
    return <Typography className={classes.list_title}>
        {children}
    </Typography>;
}
