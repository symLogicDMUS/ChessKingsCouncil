import React, {memo} from "react";
import {fontSizes} from "./MiniBoard.jss";
import { useStyles } from "../../Reuseables/Square.jss";

export const MoveHighlightSquare = memo( ({isHighlight, theme, screenCase}) => {
    const classes = useStyles({ fontSize: fontSizes[screenCase], theme: theme, type: 'normal'});

    return (<div className={isHighlight ? classes.ai_start : classes.transparent} />)
})