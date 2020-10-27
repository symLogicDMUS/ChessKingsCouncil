import React from "react";
import "./MessageModal.scss";

export function MessageModal({ togleMessageModal, messageTitle, messageText }) {
    const getStyle = () => {
        return {
            left: window.screen.availWidth / 2,
            top: window.screen.availHeight / 2,
            width: window.screen.availWidth * 0.389,
            height: window.screen.availHeight * 0.400,
            borderRadius: window.screen.availHeight * 0.02,
        };
    };

    return (
        <div className="message-modal">
            <div className="message-modal-window" style={getStyle()}>
                <img
                    src="/Images/close/close.svg"
                    className="msg-modal-close"
                    onClick={() => togleMessageModal(false)}
                />
                <div className="title">{messageTitle}</div>
                <div className="text">{messageText}</div>
                <div className="ok-button" onClick={() => togleMessageModal(false)}>
                    Ok
                </div>
            </div>
        </div>
    );
}
