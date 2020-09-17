
import React from "react";
import "./NewGameDisplaySquare.css";

export function NewGameDisplaySquare ({class_, pxPos, children}) {

        return (
            <div className={class_} style={pxPos}>
                {children}
            </div>
        )
}