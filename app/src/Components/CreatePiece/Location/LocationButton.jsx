import React from "react";
import {useStyles} from "./LocationButton.jss";

export function LocationButton({rf, selected, setLoc, theme }) {
    const classes = useStyles({rf})
    return (
        <div
            className={rf === selected ? classes.selected : classes.normal}
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
