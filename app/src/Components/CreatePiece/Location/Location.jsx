import React from "react";
import { LocationButton } from "./LocationButton";
import {useStyles} from "./Location.jss";

export function Location({ location, setLoc, screenCase, theme }) {
    const classes = useStyles()
    return (
        <>
            <div className={classes.location_tool}>
                <div className={classes.title}>Location</div>
                <LocationButton rf="d4" setLoc={setLoc} theme={theme} selected={location === "d4"} />
                <LocationButton rf="e4" setLoc={setLoc} theme={theme} selected={location === "e4"} />
                <LocationButton rf="e5" setLoc={setLoc} theme={theme} selected={location === "e5"} />
                <LocationButton rf="d5" setLoc={setLoc} theme={theme} selected={location === "d5"} />
            </div>
        </>
    );
}
