import React, { useState } from "react";
import "./Close.scss";

export function Close({ clickMethod, styleObject, theme }) {
    var [hover, setHover] = useState("off");

    return (
        <div
            className={`close-${theme}-${hover}`}
            style={styleObject}
            onClick={() => clickMethod()}
            onMouseEnter={() => setHover("on")}
            onMouseLeave={() => setHover("off")}
        />
    );
}
