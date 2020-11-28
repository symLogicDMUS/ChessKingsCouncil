import React from "react";
import { getButtonSize } from "../../styles/button/button-size";
import {useStyles} from "./IconModalButton.jss";

export function IconModalButton({ buttonText, buttonType, clickMethod, imgNameChoice }) {
    const classes = useStyles();
    return (
        <button
            className={
                buttonType === "ok"
                    ? imgNameChoice
                        ? classes.ok_active
                        : classes.ok_inactive
                    : imgNameChoice
                    ? classes.delete_active
                    : classes.delete_inactive
            }
            style={getButtonSize(window.screen.availHeight * 0.04)}
            onClick={() => clickMethod()}
        >
            {buttonText}
        </button>
    );
}
