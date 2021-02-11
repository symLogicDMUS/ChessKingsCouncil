import React from "react";
import Button from "@material-ui/core/Button";
import {fontSize002} from "../../styles/fontSizes.jss";
import { useStyles } from "./LocationButton.jss";

export function LocationButton({rf, onClick, selected, theme}) {
    const classes = useStyles({theme: theme, rf: rf})
    return (
        <Button onClick={onClick} className={selected ? classes.button_selected : classes.button_normal} variant={'outlined'}>
            {rf}
        </Button>
    );
}