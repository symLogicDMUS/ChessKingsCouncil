import React from "react";
import "./ChooseButton.scss";

export function ChooseButton({ color, showChooseModal }) {
    return (
        <div className={`${color}-choose`} onClick={() => showChooseModal(color)}>
            <p className="icon-button-text">Choose...</p>
        </div>
    );
}
