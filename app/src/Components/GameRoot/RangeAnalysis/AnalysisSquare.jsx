import React, { memo } from "react";
import clsx from "clsx";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles } from "../../Reuseables/Board/Square.jss";
import { useStyles as useMoreStyles } from "./AnalysisSquare.jss";

const AnalysisSquare = memo(({ rf, theme, isHighlight, children }) => {
    const classes = useStyles({ rf: rf, theme: theme });
    const classes2 = useMoreStyles();
    return (
        <div
            className={clsx(classes.square, {
                [classes2.square]: true,
                [classes.light_normal]: binaryBoard[rf] && !isHighlight,
                [classes.dark_normal]: !binaryBoard[rf] && !isHighlight,
                [classes.light_in_range]: binaryBoard[rf] && isHighlight,
                [classes.dark_in_range]: !binaryBoard[rf] && isHighlight,
            })}
        >
            {children}
        </div>
    );
});

export default AnalysisSquare;
