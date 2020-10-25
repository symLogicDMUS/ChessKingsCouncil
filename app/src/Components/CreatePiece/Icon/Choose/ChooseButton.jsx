import React from "react"
import "./ChooseButton.scss";

export function ChooseButton({color, showChooseModal}) {

    return(
        <button className={`${color}-choose`} onClick={()  => showChooseModal(color)}>
            Choose...
        </button>
    );

}