import React from "react";
import {useStyles} from "../../Reuseables/Board/Square.jss";
import {fontSizes} from "./BoardTool.jss";
import clsx from "clsx";
import {binaryBoard} from "../../helpers/binaryBoard";
import {fontSize002} from "../../styles/fontSizes.jss";

export function MiniSquare({rf, theme, isHighlight, screenCase, children}) {
    const classes = useStyles({rf: rf, fontSize: fontSize002, theme: theme});
    return <div className={
        clsx(classes.em_square, {
            [classes.light_normal]: binaryBoard[rf] && !isHighlight,
            [classes.dark_normal]: !binaryBoard[rf] && !isHighlight,
            [classes.light_in_range]: binaryBoard[rf] && isHighlight,
            [classes.dark_in_range]: !binaryBoard[rf] && isHighlight,
        })}
    >
        {children}
    </div>;
}