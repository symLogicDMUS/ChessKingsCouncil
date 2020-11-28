import React from "react";
import { useStyles } from "./MessageModal.jss";


export function MessageModal({toggleMessageModal, messageTitle, messageText }) {

    const classes = useStyles()

    return (
        <div className={classes.modal}>
            <div className={classes.window}>
                <img
                    src="/Images/close/close.svg"
                    className={classes.close_icon}
                    onClick={() => toggleMessageModal(false)}
                />
                <div className={classes.title}>{messageTitle}</div>
                <div className={classes.text}>{messageText}</div>
                <button
                    className={classes.ok_button}
                    onClick={() => toggleMessageModal(false)}
                >
                    Ok
                </button>
            </div>
        </div>
    );
}
