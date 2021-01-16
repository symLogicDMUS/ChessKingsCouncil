import React, {useEffect, useMemo} from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { RangeDisplaySquare } from "./RangeDisplaySquare";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles } from "./RangeDisplayBoard.jss";
import {v4 as uuidv4} from "uuid";

export function RangeDisplayBoard({ range, sqrSize, boardSize, theme }) {

    const squares = useMemo(() => {
            const newSquares = []
            for (let rf of rankfiles) {
                newSquares.push(
                    <RangeDisplaySquare
                        key={uuidv4()}
                        isInRange={range ? (!!range.includes(rf)) : false}
                        isLightColorSqr={binaryBoard[rf]}
                        sqrSize={sqrSize}
                        theme={theme}
                    />
                )
            }
            return newSquares;
    }, [range, theme])

    const classes = useStyles({boardSize: boardSize});

    return <div className={classes.board}>{squares}</div>;
}