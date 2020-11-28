import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useStyles } from "./Option.jss";

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
            <img src={src} className={classes.image} alt={`${alt}`} />
        </div>
    );
}
