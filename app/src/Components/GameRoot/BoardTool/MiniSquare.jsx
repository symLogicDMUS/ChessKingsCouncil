import React from "react";
import {fontSizes} from "./MiniBoard.jss";
import {getSqrClass} from "../../styles/getSqrClass.jss";
import {useStyles} from "../../Reuseables/Square.jss";

export function MiniSquare({ rf, theme, isHighlight, screenCase, children }) {
    const classes = useStyles({ fontSize: fontSizes[screenCase], theme: theme, type: 'normal'});
    const className = getSqrClass(rf, isHighlight);
    return <div className={classes[className]}>{children}</div>;
}