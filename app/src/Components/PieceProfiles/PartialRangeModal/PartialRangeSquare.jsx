import React from "react";
import clsx from "clsx";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "../../Reuseables/Board/Square.jss";
import {sqrSize} from "./PartialRangeSquare.jss";

export function PartialRangeSquare({onClick, rf, theme, rangeType, isHighlight, screenCase, children}) {
    const classes = useStyles({theme: theme, rf: rf, sqrSize: sqrSize[screenCase]});
    return (
        <div onClick={onClick}
            className={clsx(classes.square, {
                [classes.light_normal]: binaryBoard[rf] && ! isHighlight,
                [classes.dark_normal]: ! binaryBoard[rf] && ! isHighlight,
                [classes.offset]: isHighlight && rangeType === 'offset',
                [classes.span]: isHighlight && rangeType === 'span',
            })}
        >
            {children}
        </div>
    )
}