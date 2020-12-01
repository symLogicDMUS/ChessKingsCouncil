import React from "react";
import {useStyles} from "./PlayAsButton.jss";

export function PlayAsButton ({accept, selected}) {

        const classes = useStyles()

        return (
            <button className={selected ? classes.active : classes.inactive} onClick={accept}>
                Play
            </button>
        )
}