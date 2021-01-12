import React from "react";
import {useStyles} from "../../Reuseables/Square.jss";

export function AiSquare({rf, theme, dispatch, aiStart, aiDest}) {
    const classes = useStyles({theme: theme, type: 'dnd'});

    let className = classes.ai_none;
    if (rf === aiStart) {
        className = classes.ai_start
    }
    else if (rf === aiDest) {
        className = classes.ai_dest
    }

    return <div className={className} />;
}