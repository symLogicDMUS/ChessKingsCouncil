import React from "react";
import { useStyles } from "./Background.jss";

export function Background({theme}) {
    const classes = useStyles()
    return <img src={`/Images/Backgrounds/${theme}-background.svg`}
                className={classes.background}
                alt="background of page" />
}