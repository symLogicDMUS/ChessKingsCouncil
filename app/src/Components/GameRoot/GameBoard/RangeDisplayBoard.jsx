import React, {useMemo} from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { RangeDisplaySquare } from "./RangeDisplaySquare";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles } from "./RangeDisplayBoard.jss";

export function RangeDisplayBoard({ range, sqrSize, boardSize, theme }) {

    const squares = useMemo(() => {
            const newSquares = []
            for (let rf of rankfiles) {
                newSquares.push(
                    <RangeDisplaySquare
                        key={rf}
                        rf={rf}
                        theme={theme}
                        sqrSize={sqrSize}
                        isInRange={range ? (!!range.includes(rf)) : false}
                    />
                )
            }
            return newSquares;
    }, [range, theme])

    const classes = useStyles({boardSize: boardSize});

    return <div className={classes.board}>{squares}</div>;
}