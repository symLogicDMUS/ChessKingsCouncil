import React, {memo} from "react";
import { useStyles } from "../../Reuseables/Square.jss";
import {fontSizes} from "./BoardTool.jss";

export const MoveHighlightSquare = memo( ({isHighlight, theme, screenCase}) => {
    const classes = useStyles({ fontSize: fontSizes[screenCase], theme: theme, type: 'normal'});

    return (<div className={isHighlight ? classes.ai_start : classes.transparent} />)
})