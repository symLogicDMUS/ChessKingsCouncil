import React from "react";
import { useStyles } from "./ArrowButton.jss"

export function ArrowButton({id, image, pos, isActive, togleSpan, theme}) {
    const classes = useStyles()
        return (
            <div
                onClick={() => togleSpan(id)}
                className={isActive ? "button-selected" : "button-normal"}
                style={pos}
            >
                <img src={`/Images/arrows/range pad arrows/${theme}/${image}`} className="vector" />
            </div>
        );
}
