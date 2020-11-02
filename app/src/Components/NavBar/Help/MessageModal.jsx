import React from "react";
import { getOkButtonStyle } from "../../styles/modal-window1-components/ok-button";
import { modalWindow } from "../../styles/modal-window1-components/modal-window-size-pos";
import "./MessageModal.scss";

export function MessageModal({ togleMessageModal, messageTitle, messageText }) {
    var buttonSizePos = getOkButtonStyle(modalWindow);
    return (
        <div className="message-modal">
            <div className="message-modal-window" style={modalWindow}>
                <img
                    src="/Images/close/close.svg"
                    className="msg-modal-close"
                    onClick={() => togleMessageModal(false)}
                />
                <div className="msg-title">{messageTitle}</div>
                <div className="msg-text">{messageText}</div>
                <div className="msg-ok-button" style={buttonSizePos} onClick={() => togleMessageModal(false)}>
                    Ok
                </div>
            </div>
        </div>
    );
}
