import React from "react";
import Button from "@material-ui/core/Button";

export function LocationButton({rf, selected, setLoc, classes}) {
    return (
        <Button onClick={() => setLoc(rf)} className={rf === selected ? classes.selected : classes.normal} variant="contained">
            {rf}
        </Button>
    );
}