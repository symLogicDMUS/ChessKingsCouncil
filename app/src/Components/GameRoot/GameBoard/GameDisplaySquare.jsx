import React from "react";
import { useStyles } from "../../Reuseables/Square.jss";

export function GameDisplaySquare({rf, isLightColorSqr, sqrSize, theme}) {

    const classes = useStyles({rf: rf, theme, sqrSize: sqrSize, type: 'dnd'});

    return <div className={isLightColorSqr ? classes.light_normal : classes.dark_normal} />;
}