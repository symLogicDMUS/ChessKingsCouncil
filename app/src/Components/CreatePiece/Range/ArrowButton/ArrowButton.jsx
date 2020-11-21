import React from "react";
import "./_ArrowButton.scss";

export function ArrowButton({id, image, pos, isActive, togleSpan, theme}) {

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
