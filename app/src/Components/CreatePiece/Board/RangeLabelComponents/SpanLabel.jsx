import React from "react";
import { useStyles } from "./SpanLabel.jss";

export function SpanLabel() {
    const classes = useStyles()
    return (
    <div className={classes.span}>
        <svg viewBox="0 0 40 25">
            <text x="0" y="20" textLength="40px">span</text>
        </svg>
    </div>
    );
}