import React from "react";
import {styles} from "./_ChooseButton.jss";

export function ChooseButton({ color, showChooseModal }) {
    return (
        <div className={`${color}-choose`} onClick={() => showChooseModal(color)}>
            <p className="icon-button-text">Choose...</p>
        </div>
    );
}
