import React, { useState } from "react";
import "./_LocationButton.scss";

export function LocationButton({ rf, selected, setLoc, theme }) {
    let className = selected ? "location-button-selected" : "location-button-normal";
    let [hoverState,  setHover] = useState('hover-off')
    return (
        <div
            className={`${rf} ${className}`}
            onClick={() => setLoc(rf)}
            onMouseEnter={() => setHover('hover-on')}
            onMouseLeave={() => setHover('hover-off')}
        >
            <img
                src={`/Images/arrows/location-button-labels/${theme}/${hoverState}/${rf}.svg`}
                className="location-button-label"
                alt="button to change location of piece that creating"
            />
        </div>
    );
}
