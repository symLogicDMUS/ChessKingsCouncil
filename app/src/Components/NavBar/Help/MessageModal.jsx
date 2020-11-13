import React from "react";
import { stylesObjects } from "./HelpStyle";
import "./MessageModal.scss";

export function MessageModal({ screenCase, togleMessageModal, messageTitle, messageText }) {
    return (
        <div className="message-modal">
            <div className="message-modal-window" style={stylesObjects[screenCase]["Modal"]()}>
                <img
                    src="/Images/close/close.svg"
                    className="msg-modal-close"
                    onClick={() => togleMessageModal(false)}
                />
                <div className="msg-title">{messageTitle}</div>
                <div className="msg-text">{messageText}</div>
                <button
                    className="msg-ok-button"
                    style={stylesObjects[screenCase]["OkButton"](stylesObjects[screenCase]["Modal"]())}
                    onClick={() => togleMessageModal(false)}
                >
                    Ok
                </button>
            </div>
        </div>
    );
}
