import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import {useStyles as useMoreStyles} from "../CreatePiece.jss";
import { useStyles } from "./LocationButton.jss";

export function LocationButton({rf, onClick, selected, theme}) {
    const classes = useStyles({theme: theme, rf: rf})
    const classes2 = useMoreStyles({theme: theme});
    return (
        <Button onClick={onClick}
                className={clsx(classes2.button, {
                    [classes.button_selected]: selected,
                    [classes.button_normal]: ! selected,
                })} variant={'outlined'}>
            {rf}
        </Button>
    );
}