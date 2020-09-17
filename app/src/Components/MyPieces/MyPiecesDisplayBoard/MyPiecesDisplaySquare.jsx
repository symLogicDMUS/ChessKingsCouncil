
import React from "react";
import "./MyPiecesDisplaySquare.css";

export function MyPiecesDisplaySquare ({class_, pxPos, children}) {

        return (
            <div className={class_} style={pxPos}>
                {children}
            </div>
        )
}