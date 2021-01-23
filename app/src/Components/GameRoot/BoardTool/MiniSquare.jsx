import React from "react";
import {getSqrClass} from "../../styles/getSqrClass.jss";
import {fontSize00301, fontSize0066} from "../../styles/fontSizes.jss";
import { useStyles } from "../../Reuseables/Square.jss";

const fontSizes = {
    desktop: fontSize0066,
    mobile: fontSize00301,
}

export function MiniSquare({ rf, theme, isHighlight, screenCase, children }) {
    const classes = useStyles({ fontSize: fontSizes[screenCase], theme, type: 'normal'});
    const className = getSqrClass(rf, isHighlight);
    return <div className={classes[className]}>{children}</div>;
}