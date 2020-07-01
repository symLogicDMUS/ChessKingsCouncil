import React from "react";
import "../css/displaySqr.css";
import "../css/interactiveSqr.css";

export function Square({class_, children}) {

    return (
    <div>
        <div className={class_}>
            {children}
        </div>
    </div>
    );
}

export default Square;
