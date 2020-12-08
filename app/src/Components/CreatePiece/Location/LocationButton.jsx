import React from "react";
import {useStyles} from "./LocationButton.jss";
import Button from "@material-ui/core/Button";

export function LocationButton({rf, selected, setLoc, theme}) {
    const classes = useStyles({theme})
    return (
        <Button onClick={() => setLoc(rf)} className={rf === selected ? classes.normal : classes.selected} variant="contained">
            {rf}
        </Button>
    );
}