import React, {useMemo} from "react";
import { rankfiles } from "../../helpers/rankfiles";
import { RangeDisplaySquare } from "./RangeDisplaySquare";
import { binaryBoard } from "../../helpers/binaryBoard";
import { useStyles } from "./RangeDisplayBoard.jss";

export function RangeDisplayBoard({ range, sqrSize, boardSize, boardPos, theme }) {

    /* alternative to below:
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
    * */

    const getBoard = () => {
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
    }

    const classes = useStyles({boardSize: boardSize, boardPos: boardPos});

    return <div className={classes.board}>{getBoard()}</div>;
}