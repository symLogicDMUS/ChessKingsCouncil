import React from "react";
import clsx from "clsx";
import {fontSizes} from "./PartialRangeModal.jss";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "../../Reuseables/Board/Square.jss";

export function PartialRangeSquare({onClick, rf, theme, rangeType, isHighlight, screenCase, children}) {
    const classes = useStyles({rf: rf, theme: theme, fontSize: fontSizes[screenCase]});
    return (
        <div onClick={onClick}
            className={clsx(classes.em_square, {
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