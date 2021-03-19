import React from "react";
import clsx from "clsx";
import { widths } from "../PieceProfiles.jss";
import { useStyles } from "../../Reuseables/Board/Square.jss";
import {useStyles as useMoreStyles} from "./ProfileWBRangeSquare.jss"


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
        theme: theme,
        type:  "normal",
        sqrSize: widths[screenCase],
    });
    const classes2 = useMoreStyles({theme: theme})

    return (
        <div
            className={clsx(classes2.square, {
                [classes.span_alt]: isInRange && rangeType==="span",
                [classes.offset]: isInRange && rangeType==="offset",
                [classes.profile_wb_light]: isLightSqr && ! isInRange,
                [classes.profile_wb_dark]: ! isLightSqr && ! isInRange,
            })}
        >
            {children}
        </div>
    );
}
