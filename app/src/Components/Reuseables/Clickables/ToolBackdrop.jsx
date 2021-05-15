import React from "react";
import { useStyles } from "./ToolBackdrop.jss";

export function ToolBackdrop({onClick}) {
    const classes = useStyles();

    return (
        <div className={classes.backdrop} onClick={onClick}/>
    );
}

