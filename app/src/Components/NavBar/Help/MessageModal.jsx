import React from "react";
import {buttonSizePos} from "../../styles/button/button-size-pos";
import "./MessageModal.scss";

export function MessageModal({ togleMessageModal, messageTitle, messageText }) {
    var modalWidth = window.screen.availWidth * 0.389;
    var modalHeight = window.screen.availHeight * 0.400;
    var modalLeft = window.screen.availWidth * 0.5 -  width * 0.5;
    var modaltTop = window.screen.availHeight * 0.5 - height * 0.5
    var modalBorderRadius = window.screen.availHeight * 0.02;
    
    const getWindowStyle = () => {
        var buttonHeight = modalHeight * 0.1;
        buttonSizePos(buttonHeight)
        return {
            left: modalLeft,
            top: modaltTop,
            width: modalWidth,
            height: modalHeight,
            borderRadius: modalBorderRadius
        };
    };
    const getButtonStyle = () => {
        return {
            ...buttonSizePos(height)
        }
    }
    return (
        <div className="message-modal">
            <div className="message-modal-window" style={getWindowStyle()}>
                <img
                    src="/Images/close/close.svg"
                    className="msg-modal-close"
                    onClick={() => togleMessageModal(false)}
                />
                <div className="msg-title">{messageTitle}</div>
                <div className="msg-text">{messageText}</div>
                <div className="msg-ok-button" onClick={() => togleMessageModal(false)}>
                    Ok
                </div>
            </div>
        </div>
    );
}
