import React from "react";
import "./MessageModal.css";

export function MessageModal({ togleMessageModal, messageTitle, messageText }) {
    return (
        <div className="message-modal">
            <div className="message-modal-window">
                <div className="message-modal-window-top">
                    <div className="message-modal-window-title">{messageTitle}</div>
                    <div className="message-modal-window-close" onClick={() => togleMessageModal(false)}>
                        <img
                            src="/Images/close.svg"
                            style={{ width: "15px", height: "15px" }}
                            alt="X symbol to close window"
                        />
                    </div>
                </div>
                <div className="message-modal-window-text-area">{messageText}</div>
                <div className="message-modal-window-bottom">
                    <button onClick={() => togleMessageModal(false)} className="message-modal-window-bottom-button">
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
}
