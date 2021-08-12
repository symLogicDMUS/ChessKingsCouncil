import React from "react";
import { getButtonSize } from "../styles/button/button-size";
import { useStyles } from "./MyPiecesButton.jss";

export function MyPiecesButton({
    buttonType,
    buttonText,
    clickMethod,
    pieceName,
}) {
    const classes = useStyles();
    return (
        <button
            className={buttonType === "load" ? classes.load : classes.delete}
            onClick={() => clickMethod(pieceName)}
        >
            {buttonText}
        </button>
    );
}
