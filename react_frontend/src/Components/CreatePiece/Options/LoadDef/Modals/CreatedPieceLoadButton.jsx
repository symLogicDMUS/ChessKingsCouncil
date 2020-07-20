import React from "react";
import "./CreatedPieceLoadButton.css";

export function CreatedPieceLoadButton({accept, selected}) {

    let class_ = "created-piece-load-button created-piece-load-button-active"
    if (selected === null)
        class_ = "created-piece-load-button created-piece-load-button-inactive"

    return (
        <div className={class_} onClick={accept}>
            Load
        </div>        
    )

}