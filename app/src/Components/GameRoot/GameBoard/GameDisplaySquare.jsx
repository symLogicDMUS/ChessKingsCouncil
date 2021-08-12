import React from "react";
import clsx from "clsx";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles } from "../../Reuseables/Board/Square.jss";

export function GameDisplaySquare({ rf, sqrSize, theme }) {
    const classes = useStyles({ rf: rf, theme, sqrSize: sqrSize });

    return (
        <div
            className={clsx(classes.square, {
                [classes.light_normal]: binaryBoard[rf],
                [classes.dark_normal]: !binaryBoard[rf],
            })}
        />
    );
}
