import React from "react";
import { stylesObjects } from "./HelpStyle";
import {styles} from "./MessageModal.jss";

export function MessageModal({ screenCase, toggleMessageModal, messageTitle, messageText }) {
    return (
        <div className="message-modal">
            <div className="message-modal-window" style={stylesObjects[screenCase]["Modal"]()}>
                <img
                    src="/Images/close/close.svg"
                    className="msg-modal-close"
                    onClick={() => toggleMessageModal(false)}
                />
                <div className="msg-title">{messageTitle}</div>
                <div className="msg-text">{messageText}</div>
                <button
                    className="msg-ok-button"
                    style={stylesObjects[screenCase]["OkButton"](stylesObjects[screenCase]["Modal"]())}
                    onClick={() => toggleMessageModal(false)}
                >
                    Ok
                </button>
            </div>
        </div>
    );
}
