import React from "react";
import {v4 as uuidv4} from 'uuid';
import {AiSquare} from "./AISquare";
import {rankfiles} from "../../helpers/rankfiles";
import {useStyles} from "./AIBoard.jss";

export function AIBoard({theme, sqrSize, boardSize, aiStart, aiDest}) {
    const classes = useStyles({boardSize: boardSize})

    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            squares.push(
                <AiSquare key={uuidv4()} rf={rf} theme={theme} aiStart={aiStart} aiDest={aiDest} sqrSize={sqrSize}/>
            );
        }
        return squares;
    };
    return (
        <div className={classes.ai_board}>
            {getBoard()}
        </div>
    );
}