import React from "react";
import ReactDOM from "react-dom";
import { stylesObjects } from "./Help/HelpStyle";
import "./ConfirmModal.scss";

export function ConfirmModal({screenCase, text, yesClick, noClick }) {
    return (
        <div className="confirm-window" style={stylesObjects[screenCase]['Modal']()}>
            <div className="confirm-text">{text}</div>
            <div
                className="yes-button"
                style={stylesObjects[screenCase]["YesNoButton"](stylesObjects[screenCase]["Modal"]()).yes}
                onClick={yesClick}
            >
                Yes
            </div>
            <div
                className="no-button"
                style={stylesObjects[screenCase]["YesNoButton"](stylesObjects[screenCase]["Modal"]()).no}
                onClick={noClick}
            >
                No
            </div>
        </div>
    );
}

export let test = () => ReactDOM.render(<ConfirmModal />, document.getElementById("root"));
