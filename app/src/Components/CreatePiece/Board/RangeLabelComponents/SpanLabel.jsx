import React from "react";
import {styles} from "./_getSpanLabel.jss";

export function SpanLabel() {
    return (
    <div className={classes.span}>
        <svg viewBox="0 0 40 25">
            <text x="0" y="20" textLength="40px">span</text>
        </svg>
    </div>
    );
}