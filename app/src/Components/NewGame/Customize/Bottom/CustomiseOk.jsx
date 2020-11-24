import React from "react";
import {useStyles} from "./CustomizeOk.jss"

export function Ok({className, screenCase, accept }) {
    const classes = useStyles()
    return (
        <button className={classes.button} onClick={accept}>
            Ok
        </button>
    );
}
