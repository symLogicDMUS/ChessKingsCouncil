import React from "react";
import "./Location.scss";

export function LocationButton({ rf, selected, setLoc, theme }) {
    let className = selected ? "location-button-selected" : "location-button-normal";
    return (
        <div
            className={`${rf} ${className}`}
            onClick={() => setLoc(rf)}
        >
            <img
                src={`/Images/location-button-labels/${theme}/${rf}.svg`}
                className="location-button-label"
                alt="button to change location of piece that creating"
            />
        </div>
    );
}
