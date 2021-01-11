import React, { useEffect, useReducer } from "react";
import { reducer } from "./reducers/RangeDisplayBoard";
import { rankfiles } from "../../helpers/rankfiles";
import { RangeDisplaySquare } from "./RangeDisplaySquare";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles } from "./RangeDisplayBoard.jss";

export function RangeDisplayBoard({ rangeBoard, theme }) {
    const [squares, dispatch] = useReducer(
        reducer,
        rankfiles.map((rf) => (
            <RangeDisplaySquare
                theme={theme}
                isInRange={false}
                isLightColorSqr={binaryBoard[rf]}
            />
        ))
    );

    useEffect(() => {
        dispatch({ type: "update", rangeBoard: rangeBoard, theme: theme });
    }, [rangeBoard, theme]);

    const classes = useStyles();

    return <div className={classes.board}>{squares}</div>;
}
