import React from "react";
import "./CreatedPieceLoadButton.css";

export function CreatedPieceLoadButton({accept}) {

    return (
        <div className="created-piece-load-button" onClick={accept}>
            Load
        </div>        
    )

}