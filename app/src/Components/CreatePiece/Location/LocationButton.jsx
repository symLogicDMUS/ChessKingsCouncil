import React from "react";
import Button from "@material-ui/core/Button";
import {fontSize} from "../fontSize.jss";
import { useStyles } from "./LocationButton.jss";

export function LocationButton({rf, selected, setLoc, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize})
    return (
        <Button onClick={() => setLoc(rf)} className={selected ? classes.button_selected : classes.button_normal} variant={'outlined'}>
            {rf}
        </Button>
    );
}