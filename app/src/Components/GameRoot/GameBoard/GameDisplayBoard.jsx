import React from "react";
import {v4 as uuidv4} from 'uuid';
import {rankfiles} from "../../helpers/rankfiles";
import {GameDisplaySquare} from "./GameDisplaySquare";
import {useStyles} from "./GameDisplayBoard.jss";
import {binaryBoard} from "../../helpers/binaryBoard";

export function GameDisplayBoard({theme, sqrSize, boardSize}) {

    const classes = useStyles({boardSize: boardSize});

    return (
        <div className={classes.board}>
            {rankfiles.map(rf => <GameDisplaySquare sqrSize={sqrSize} isLightColorSqr={binaryBoard[rf]} theme={theme} key={uuidv4()}/>)}
        </div>
    )
}