import React from "react";
import { useStyles } from "../../Reuseables/Square.jss";

export function RangeDisplaySquare({isInRange, isLightColorSqr, theme}) {
    const classes = useStyles({theme, type: 'dnd'});

    let className;
    if (isInRange) {
        if (isLightColorSqr) {
            className = classes.light_in_range;
        }
        else { 
            className = classes.dark_in_range;
        }
    }
    else {
        className = classes.transparent;
    }

    return (
        <div className={className}/>
    )
}