import React from "react";
import ReactDOM from "react-dom";
import {modalWindow} from "../../../../../styles/modal-window1-components/modal-window-size-pos";
import {getYesNoButtonStyle} from "../../../../../styles/modal-window1-components/yes-no-buttons";
import "./ConfirmOverwrite.scss";

export function ConfirmOverwrite({name, save, setSaveStatus }) {

    const buttonSizePos = getYesNoButtonStyle(modalWindow);

    return (
        <div className="confirm-box" style={modalWindow}>
            <div className="label1">A piece named</div>
            <div className="piece-name">"{name}"</div>
            <div className="label2">already exists. do you want to replace it?</div>
            <div className="yes-button" style={buttonSizePos.yes} onClick={() => save()}>
                Yes
            </div>
            <div className="no-button" style={buttonSizePos.no} onClick={() => setSaveStatus("none")}>
                No
            </div>
        </div>
    );
}

export let test = () => ReactDOM.render(<ConfirmOverwrite />, document.getElementById("root"));