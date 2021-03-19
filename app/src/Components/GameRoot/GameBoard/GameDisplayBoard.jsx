import React from "react";
import {rankfiles} from "../../helpers/rankfiles";
import {GameDisplaySquare} from "./GameDisplaySquare";
import {binaryBoard} from "../../helpers/binaryBoard";
import {useStyles} from "./GameDisplayBoard.jss";

export function GameDisplayBoard({theme, sqrSize, boardSize}) {

    const classes = useStyles({boardSize: boardSize});

    return (
        <div className={classes.board}>
            {rankfiles.map(rf => <GameDisplaySquare  key={rf} rf={rf} sqrSize={sqrSize} theme={theme}/>)}
        </div>
    )
}