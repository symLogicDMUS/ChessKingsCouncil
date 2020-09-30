
import React from "react";
import "./CreatePieceDisplaySquare.css";

export function CreatePieceDisplaySquare ({class_, pxPos, children}) {

        return (
            <div className={class_} style={pxPos}>
                {children}
            </div>
        )
}