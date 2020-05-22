import React from "react";
import "../index.css";

export default function Square({sqr_color, children}) {
    return (
        <div className={sqr_color}>
            {children}
        </div>

    );
}
