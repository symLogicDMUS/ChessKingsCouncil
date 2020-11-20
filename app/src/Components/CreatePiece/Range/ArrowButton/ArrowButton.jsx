import React, {useState} from "react";
import "./_ArrowButton.scss";

export function ArrowButton({id, image, pos, isActive, togleSpan, theme}) {
    
        let [hoverState, setHoverState] = useState('hover-off')

        return (
            <div
                onClick={() => togleSpan(id)}
                onMouseEnter={() => setHoverState('hover-on')}
                onMouseLeave={() => setHoverState('hover-off')}
                className={isActive ? "button-selected" : "button-normal"}
                style={pos}
            >
                <img src={`/Images/arrows/range pad arrows/${theme}/${hoverState}/${image}`} className="vector" />
            </div>
        );
}
