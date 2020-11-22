import React from "react";
import { LocationButton } from "./LocationButton";
import { stylesObjects } from "../create-piece-styles-objects";
import "./Location.scss";

export function Location({ location, setLoc, screenCase, theme }) {
    return (
        <>
            <div className="location-tool" style={stylesObjects[screenCase]["Location"]()}>
                <div className="location-title">Location</div>
                <LocationButton rf="d4" setLoc={setLoc} theme={theme} selected={location === "d4"} />
                <LocationButton rf="e4" setLoc={setLoc} theme={theme} selected={location === "e4"} />
                <LocationButton rf="e5" setLoc={setLoc} theme={theme} selected={location === "e5"} />
                <LocationButton rf="d5" setLoc={setLoc} theme={theme} selected={location === "d5"} />
            </div>
        </>
    );
}
