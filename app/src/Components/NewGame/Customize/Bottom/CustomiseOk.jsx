import React from "react";
import { getButtonSize } from "../../../styles/button/button-size";
import "./CustomiseOk.scss";

export function Ok({ accept }) {
    return (
        <button className="customize-ok" onClick={accept} style={getButtonSize(window.screen.availHeight * 0.035)}>
            Ok
        </button>
    );
}
