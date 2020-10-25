import React from "react";
import "./CustomiseOk.scss";

export function Ok({accept}) {

    return (
        <button className="new-game-accept-customization" onClick={accept}>
            Ok
        </button>
    )

}