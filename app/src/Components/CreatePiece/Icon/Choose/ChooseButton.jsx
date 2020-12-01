import React from "react";
import { useStyles } from "./ChooseButton.jss";

export function ChooseButton({ color, showChooseModal }) {
    const classes = useStyles();
    return (
        <div className={color === "white" ? classes.white : classes.black} onClick={() => showChooseModal(color)}>
            <p className="icon-button-text">Choose...</p>
        </div>
    );
}
