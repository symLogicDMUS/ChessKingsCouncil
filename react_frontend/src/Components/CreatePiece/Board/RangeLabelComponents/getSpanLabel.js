import React from "react";
import "./offset.css";

export function getSpanLabel() {
    return (
    <div className="span">
        <svg viewBox="0 0 40 25">
            <text x="0" y="20" textLength="40px">span</text>
        </svg>
    </div>
    );
}