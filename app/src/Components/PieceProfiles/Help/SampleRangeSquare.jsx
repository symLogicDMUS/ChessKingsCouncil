import React from "react";
import {useStyles} from "../../Reuseables/Board/Square.jss";

export function SampleRangeSquare({rf, isLightSqr, isSpan, fontSize, theme, children}) {
    const classes = useStyles({rf: rf, fontSize: fontSize, theme: theme, type: 'em'})
    return (
        <div
            className={isSpan ? classes.span :
            (isLightSqr ? classes.light_normal : classes.dark_normal)}
        >
            {children}
        </div>
    );
}