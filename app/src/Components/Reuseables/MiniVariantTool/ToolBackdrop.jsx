import React from "react";
import { useStyles } from "./ToolBackdrop.jss";

export function ToolBackdrop(props) {
    const { onClick, ...other } = props;
    const classes = useStyles();

    return <div onClick={onClick} className={classes.backdrop} {...other} />;
}
