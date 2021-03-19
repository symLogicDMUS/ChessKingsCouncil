import React from "react";
import { useStyles } from "../../Reuseables/Board/Square.jss";
import clsx from "clsx";
import {binaryBoard} from "../../helpers/binaryBoard";

export function RangeDisplaySquare({rf, isInRange, theme, sqrSize }) {

    const classes = useStyles({rf: rf, theme, sqrSize: sqrSize});

    return (
        <div
            className={clsx(classes.square, {
                [classes.light_normal]: binaryBoard[rf] && ! isInRange,
                [classes.dark_normal]: ! binaryBoard[rf] && ! isInRange,
                [classes.light_in_range]: binaryBoard[rf] && isInRange,
                [classes.dark_in_range]: ! binaryBoard[rf] && isInRange,
            })}
        />
    );
}