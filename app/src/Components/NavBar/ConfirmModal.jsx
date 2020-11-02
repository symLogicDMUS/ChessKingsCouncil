import React from "react";
import ReactDOM from "react-dom";
import { modalWindow } from "../styles/modal-window1-components/modal-window-size-pos";
import { getYesNoButtonStyle } from "../styles/modal-window1-components/yes-no-buttons";
import "./ConfirmModal.scss";

export function ConfirmModal({ text, yesClick, noClick }) {
    const buttonSizePos = getYesNoButtonStyle(modalWindow);

    return (
        <div className="confirm-window" style={modalWindow}>
            <div className="confirm-text">{text}</div>
            <div className="yes-button" style={buttonSizePos.yes} onClick={yesClick}>
                Yes
            </div>
            <div className="no-button" style={buttonSizePos.no} onClick={noClick}>
                No
            </div>
        </div>
    );
}

export let test = () => ReactDOM.render(<ConfirmModal />, document.getElementById("root"));
