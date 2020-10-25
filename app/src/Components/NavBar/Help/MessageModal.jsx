import React from "react";
import "./MessageModal.scss";

export function MessageModal({ togleMessageModal, messageTitle, messageText }) {
    return (
        <div className="message-modal">
            <div className="message-modal-window">
                <img src="/Images/close/close.svg" className="msg-modal-close" onClick={() => togleMessageModal(false)} />
                <div className="title">{messageTitle}</div>
                <div className="text">{messageText}</div>
                <div className="ok-button" onClick={() => togleMessageModal(false)}>
                    Ok
                </div>
            </div>
        </div>
    );
}
