import React from "react";
import { getButtonSize } from "../../../styles/button/button-size";
import "./_IconModalButton.scss";

export function IconModalButton({ buttonText, buttonType, clickMethod, imgNameChoice }) {
    if (imgNameChoice) {
        return (
            <button
                className={`${buttonType}-active`}
                style={getButtonSize(window.screen.availHeight * 0.04)}
                onClick={() => clickMethod()}
            >
                {buttonText}
            </button>
        );
    } else {
        return (
            <button className={`${buttonType}-inactive`} style={getButtonSize(window.screen.availHeight * 0.04)}>
                {buttonText}
            </button>
        );
    }
}
