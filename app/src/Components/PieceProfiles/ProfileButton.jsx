import React from "react";
import { getButtonSize } from "../styles/button/button-size";
import "./ProfileButton.scss";

export function ProfileButton({buttonType, buttonText, clickMethod, pieceName }) {
    return (
        <button
            className={`profile-${buttonType}-button`}
            style={getButtonSize(window.screen.availHeight * 0.03)}
            onClick={() => clickMethod(pieceName)}
        >
            {buttonText}
        </button>
    );
}