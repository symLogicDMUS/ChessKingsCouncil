import React, {memo} from "react";
import clsx from "clsx";
import {sqrSize} from "./BoardTool.jss";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "../../Reuseables/Board/Square.jss";

export const MiniSquare = memo(({rf, theme, isHighlight, screenCase, children}) => {
    const classes = useStyles({rf: rf, sqrSize: sqrSize[screenCase], theme: theme});
    return <div className={
        clsx(classes.square, {
            [classes.light_normal]: binaryBoard[rf] && !isHighlight,
            [classes.dark_normal]: !binaryBoard[rf] && !isHighlight,
            [classes.light_in_range]: binaryBoard[rf] && isHighlight,
            [classes.dark_in_range]: !binaryBoard[rf] && isHighlight,
        })}
    >
        {children}
    </div>;
})