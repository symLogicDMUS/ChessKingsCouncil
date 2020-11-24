import React, { useState } from "react";
import ReactDOM from "react-dom";
import {styles} from "./_Option.jss";

export function Option({ className, clickMethod, normal, highlighted, alt }) {
    let [isHover, setHover] = useState(false);
    let src = isHover ? highlighted : normal;
    return (
        <div
            className={`${className}`}
            onClick={clickMethod}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={src} className="option-img" alt={`${alt}`} />
        </div>
    );
}

