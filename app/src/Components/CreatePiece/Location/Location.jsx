import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LocationButton } from "./LocationButton";
import { stylesObjects } from "../create-piece-styles-objects";
import "./_Location.scss";

export function Location({ location, setLoc, screenCase, theme }) {
    // let [location, setLocation] = useState("d4");
    // const changeLoc = (rf) => {
    //     setLocation(rf);
    //     updateParent(rf); //notify parent of location change
    // };
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

export let test = () => ReactDOM.render(<Location />, document.getElementById("root"));
