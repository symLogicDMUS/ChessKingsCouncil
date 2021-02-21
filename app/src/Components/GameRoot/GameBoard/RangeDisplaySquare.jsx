import React from "react";
import { useStyles } from "../../Reuseables/Square.jss";

export function RangeDisplaySquare({rf, isInRange, isLightColorSqr, theme, sqrSize }) {

    const classes = useStyles({rf: rf, theme, type: "dnd", sqrSize: sqrSize});

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