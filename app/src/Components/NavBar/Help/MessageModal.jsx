import React from "react";
import { getOkButtonStyle } from "../../styles/modal-window1-components/ok-button";
import {stylesObjects} from "./message-modal-styles-objects";
import "./MessageModal.scss";

export function MessageModal({screenCase, togleMessageModal, messageTitle, messageText }) {
    var buttonSizePos = getOkButtonStyle(stylesObjects[screenCase]['Modal']());
    return (
        <div className="message-modal">
            <div className="message-modal-window" style={stylesObjects[screenCase]['Modal']()}>
                <img
                    src="/Images/close/close.svg"
                    className="msg-modal-close"
                    onClick={() => togleMessageModal(false)}
                />
                <div className="msg-title">{messageTitle}</div>
                <div className="msg-text">{messageText}</div>
                <button className="msg-ok-button" style={buttonSizePos} onClick={() => togleMessageModal(false)}>
                    Ok
                </button>
            </div>
        </div>
    );
}
