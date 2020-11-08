import React from "react";
import { getButtonSize } from "../styles/button/button-size";
import "./MyPiecesButton.scss";

export function MyPiecesButton({buttonType, buttonText, clickMethod, pieceName }) {
    return (
        <button
            className={`my-${buttonType}-button`}
            style={getButtonSize(window.screen.availHeight * 0.03)}
            onClick={() => clickMethod(pieceName)}
        >
            {buttonText}
        </button>
    );
}