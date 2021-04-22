import React from "react";
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
            onClick={() => clickMethod()}
        >
            {buttonText}
        </button>
    );
}
