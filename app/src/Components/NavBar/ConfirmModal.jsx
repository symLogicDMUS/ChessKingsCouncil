import React from "react";
import { useStyles } from "./ConfirmModal.jss";

export function ConfirmModal({ text, title,  yesClick, noClick, closeClick }) {
    const classes = useStyles();
    return (
        <div className={classes.window}>
            <img
                src="/Images/close/close.svg"
                className={classes.close}
                onClick={closeClick}
            />
            <div title={classes.title}>{title}</div>
            <div className={classes.text}>{text}</div>
            <div className={classes.yes_button} onClick={yesClick}>
                Yes
            </div>
            <div className={classes.no_button} onClick={noClick}>
                No
            </div>
        </div>
    );
}
