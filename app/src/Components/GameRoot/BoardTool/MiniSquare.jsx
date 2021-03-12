import React from "react";
import {getSqrClass} from "../../styles/getSqrClass.jss";
import {useStyles} from "../../Reuseables/Board/Square.jss";
import {fontSizes} from "./BoardTool.jss";

export function MiniSquare({rf, theme, isHighlight, screenCase, children }) {
    const classes = useStyles({rf: rf, fontSize: fontSizes[screenCase], theme: theme, type: 'normal'});
    const className = getSqrClass(rf, isHighlight);
    return <div className={classes[className]}>{children}</div>;
}