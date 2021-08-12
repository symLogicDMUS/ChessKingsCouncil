import React, { memo } from "react";
import clsx from "clsx";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles as useMoreStyles } from "../../Reuseables/Board/Square.jss";
import { useStyles } from "./RangeDisplaySquare.jss";

export const RangeDisplaySquare = memo(({ rf, theme }) => {
    const classes = useStyles({ rf: rf, theme: theme });
    const classes2 = useMoreStyles({ theme: theme, rf: rf });

    return (
        <div
            className={clsx(classes.square, {
                [classes2.light_in_range]: binaryBoard[rf],
                [classes2.dark_in_range]: !binaryBoard[rf],
            })}
        />
    );
});
