
import React from "react";
import {styles} from "./DisplaySquare.jss";

export function DisplaySquare ({class_, properties, children}) {

        return (
            <div className={class_} style={properties}>
                {children}
            </div>
        )
}