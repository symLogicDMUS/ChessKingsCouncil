import React, { useState } from "react";
import { useStyles } from "../../Reuseables/Square.jss";

export function RangeDisplaySquare({ isInRange, isLightColorSqr, theme }) {

    const classes = useStyles({ theme, type: "dnd", style: {opacity: '0.6'} });

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