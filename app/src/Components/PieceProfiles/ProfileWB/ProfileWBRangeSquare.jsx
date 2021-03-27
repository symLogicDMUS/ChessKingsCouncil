import React, {memo} from "react";
import clsx from "clsx";
import {binaryBoard} from "../../helpers/binaryBoard";
import { useStyles } from "../../Reuseables/Board/Square.jss";
import {sqrSize, useStyles as useMoreStyles} from "./ProfileWBRangeSquare.jss";

export const ProfileWBRangeSquare = memo(({
    rf,
    theme,
    isInRange,
    rangeType,
    screenCase,
    children,
}) => {
    const classes = useStyles({
        rf: rf,
        theme: theme,
        type:  "normal",
        sqrSize: sqrSize[screenCase],
    });

    const classes2 = useMoreStyles();

    return (
        <div
            className={clsx(classes.square, {
                [classes.profile_wb_light]: binaryBoard[rf] && ! isInRange,
                [classes.profile_wb_dark]: ! binaryBoard[rf] && ! isInRange,
                [classes.span_alt]: isInRange && rangeType==="span",
                [classes.offset]: isInRange && rangeType==="offset",
                [classes2.square]: true,
            })}
        >
            {children}
        </div>
    );
});
