import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { useStyles } from "./NameDisplayAboveBoard.jss";

export function NameDisplayAboveBoard({ name }) {
    const classes = useStyles();

    return <div className={classes.label}>{name}</div>;
}
