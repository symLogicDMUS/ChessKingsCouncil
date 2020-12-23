import React from "react";
import {getRangeSqrClass} from "../../../styles/getSqrColorClass.jss";
import { useStyles } from "../../../Reuseables/Square.jss";
import {fontSize} from "../../../styles/fontSize.jss";

export function RangeDisplaySquare({ rf, theme, isHighlight, children }) {
    const classes = useStyles({ fontSize, theme});
    const className = getRangeSqrClass(rf, isHighlight, classes);
    return <div className={className}>{children}</div>;
}