import React from "react";
import { fontSizes, widths } from "../PieceProfiles.jss";
import { useStyles } from "../../Reuseables/Board/Square.jss";

export function ProfileWBRangeSquare({
    rf,
    isLightSqr,
    isInRange,
    rangeType,
    theme,
    screenCase,
    children,
}) {
    const classes = useStyles({
        rf: rf,
        sqrSize: widths[screenCase],
        style: { fontSize: fontSizes[screenCase]*0.125, cursor: 'default' },
        theme: theme,
        type: "dnd",
    });

    return (
        <div
            className={
                isInRange
                    ? rangeType === "span"
                        ? classes.span_alt
                        : classes.offset
                    : isLightSqr
                    ? classes.profile_wb_light
                    : classes.profile_wb_dark
            }
        >
            {children}
        </div>
    );
}
