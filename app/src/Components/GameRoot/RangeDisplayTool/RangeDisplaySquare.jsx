import React from "react";
import {getSqrClass} from "../../styles/getSqrClass.jss";
import {smallBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "../../Reuseables/Square.jss";

export function RangeDisplaySquare({ rf, theme, isHighlight, children }) {
    const classes = useStyles({ fontSize: fontSize, theme});
    const className = getSqrClass(rf, isHighlight);
    return <div className={classes[className]}>{children}</div>;
}