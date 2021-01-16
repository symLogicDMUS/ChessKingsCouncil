import React from "react";
import { useStyles } from "../../Reuseables/Square.jss";

export function GameDisplaySquare({isLightColorSqr, sqrSize, theme}) {

    const classes = useStyles({theme, sqrSize: sqrSize, type: 'dnd'});

    return <div className={isLightColorSqr ? classes.light_normal : classes.dark_normal} />;
}