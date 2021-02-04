import React from "react";
import Button from "@material-ui/core/Button";
import {fontSize0015, fontSize002} from "../../styles/fontSizes.jss";
import { useStyles } from "../Location/LocationButton.jss";

export function LocationButtonExample({rf, onClick, selected, theme}) {
    const classes = useStyles({theme: theme, fontSize: fontSize0015})
    return (
        <Button onClick={onClick} className={selected ? classes.button_selected : classes.button_normal} variant={'outlined'}>
            {rf}
        </Button>
    );
}