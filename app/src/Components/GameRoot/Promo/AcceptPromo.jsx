import React from "react";
import { useStyles } from "./AcceptPromo.jss";

export function AcceptPromo({ promoChoice, promote }) {
    const classes = useStyles();
    const className = promoChoice ? classes.active : classes.inactive;
    return (
        <button className={className} onClick={promoChoice ? () => promote() : () => null}>
            Ok
        </button>
    );
}
