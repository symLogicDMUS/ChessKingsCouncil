import React from "react";
import "../GameRoot.css";

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
