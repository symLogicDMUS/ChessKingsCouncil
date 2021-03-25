import React from "react";
import clsx from "clsx";
import {sqrSize} from "./BoardTool.jss";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "../../Reuseables/Board/Square.jss";

export const MiniSquare = ({rf, theme, isHighlight, screenCase, children}) => {
    const classes = useStyles({rf: rf, type: 'normal', sqrSize: sqrSize, theme: theme});
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