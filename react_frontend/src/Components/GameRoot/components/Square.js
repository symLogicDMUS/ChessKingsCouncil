import React from "react";
import "../GameRoot.css";

export function Square({sqr_color, children}) {
    return (
    <div>
        <div className={sqr_color}>
            {children}
        </div>
    </div>
    );
}

export default Square;
