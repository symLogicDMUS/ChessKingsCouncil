import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../Location/LocationButton.jss";

export function LocationButtonExample({rf, onClick, selected, theme}) {
    const classes = useStyles({theme: theme, fontSize: '1.5vh'})
    return (
        <Button onClick={onClick} className={selected ? classes.button_selected : classes.button_normal} variant={'outlined'}>
            {rf}
        </Button>
    );
}