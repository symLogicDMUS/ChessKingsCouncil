import React from "react";
import "./CustomiseOk.css";

export function Ok({accept}) {

    return (
        <button className="new-game-accept-customization" onClick={accept}>
            Ok
        </button>
    )

}