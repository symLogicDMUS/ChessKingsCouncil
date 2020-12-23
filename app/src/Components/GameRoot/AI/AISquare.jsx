import React from "react";
import {fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./AiSquare.jss";

export function AiSquare({rf, theme, aiStart, aiDest}) {
    const classes = useStyles({fontSize, theme});

    let className = classes.none;
    if (rf === aiStart) className = classes.ai_start
    else if (rf === aiDest) className = classes.ai_dest

    return <div className={className}/>;
}

