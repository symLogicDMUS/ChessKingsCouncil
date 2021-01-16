import React from "react";
import {getSqrClass} from "../../styles/getSqrClass.jss";
import { useStyles } from "../../Reuseables/Square.jss";
import {smallBoardFontSizeDesktop as fontSize} from "../../Reuseables/Board.jss";

export function MiniSquare({ rf, theme, isHighlight, screenCase, children }) {
    const classes = useStyles({ fontSize: screenCase === 'mobile' ? fontSize*1.1 : fontSize, theme, type: 'normal'});
    const className = getSqrClass(rf, isHighlight);
    return <div className={classes[className]}>{children}</div>;
}