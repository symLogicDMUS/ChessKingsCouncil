import React from "react";
import clsx from "clsx";
import { widths } from "../PieceProfiles.jss";
import { useStyles } from "../../Reuseables/Board/Square.jss";
import {useStyles as useMoreStyles} from "./ProfileWBRangeSquare.jss"
import {binaryBoard} from "../../helpers/binaryBoard";


export function ProfileWBRangeSquare({
    rf,
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
                [classes.profile_wb_light]: binaryBoard[rf] && ! isInRange,
                [classes.profile_wb_dark]: ! binaryBoard[rf] && ! isInRange,
                [classes.span_alt]: isInRange && rangeType==="span",
                [classes.offset]: isInRange && rangeType==="offset",
            })}
        >
            {children}
        </div>
    );
}
