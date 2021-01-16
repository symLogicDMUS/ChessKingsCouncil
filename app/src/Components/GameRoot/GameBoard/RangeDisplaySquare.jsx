import React, { useState } from "react";
import { useStyles } from "../../Reuseables/Square.jss";

export function RangeDisplaySquare({ isInRange, isLightColorSqr, theme, sqrSize }) {

    const classes = useStyles({ theme, type: "dnd", sqrSize: sqrSize});

    return (
        <div
            className={
                isInRange
                    ? isLightColorSqr
                        ? classes.light_in_range
                        : classes.dark_in_range
                    : classes.transparent
            }
        />
    );
}