import React from "react";
import "../GameRoot.css";

export default function Square({sqr_color, children}) {
    return (
    <div>
        <div className={sqr_color}>
            {children}
        </div>
    </div>
    );
}
