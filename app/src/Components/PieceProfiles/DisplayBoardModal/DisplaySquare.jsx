
import React from "react";
import "./DisplaySquare.scss";

export function DisplaySquare ({class_, properties, children}) {

        return (
            <div className={class_} style={properties}>
                {children}
            </div>
        )
}