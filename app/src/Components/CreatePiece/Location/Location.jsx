import React from "react";
import { LocationButton } from "./LocationButton";
import Button from "@material-ui/core/Button";
import {useStyles} from "./Location.jss";
import {Typography} from "@material-ui/core";

export function Location({ location, setLoc, theme }) {
    const classes = useStyles({theme})
    return (
        <>
            <div className={classes.location_tool}>
                <Typography className={classes.title}>Location</Typography>
                <div className={classes.button_group}>
                    <LocationButton rf="d4" setLoc={setLoc} theme={theme} selected={location === "d4"} />
                    <LocationButton rf="e4" setLoc={setLoc} theme={theme} selected={location === "e4"} />
                    <LocationButton rf="e5" setLoc={setLoc} theme={theme} selected={location === "e5"} />
                    <LocationButton rf="d5" setLoc={setLoc} theme={theme} selected={location === "d5"} />
                </div>
            </div>
        </>
    );
}