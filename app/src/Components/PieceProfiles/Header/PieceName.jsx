import React from "react";
import {Typography} from "@material-ui/core";
import { useStyles } from "./PieceName.jss";

export function PieceName({theme, children}) {
    const classes = useStyles({theme});
    return <Typography
        noWrap
        variant="h6"
        className={classes.piece_name}
    >
        {children}
    </Typography>;
}