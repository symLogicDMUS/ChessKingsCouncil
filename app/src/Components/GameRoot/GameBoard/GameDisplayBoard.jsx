import React from "react";
import {v4 as uuidv4} from 'uuid';
import {rankfiles} from "../../helpers/rankfiles";
import {GameDisplaySquare} from "./GameDisplaySquare";
import {useStyles} from "./GameDisplayBoard.jss";
import {binaryBoard} from "../../helpers/binaryBoard";

export function GameDisplayBoard({theme}) {

    const classes = useStyles();

    return (
        <div className={classes.board}>
            {rankfiles.map(rf => <GameDisplaySquare isLightColorSqr={binaryBoard[rf]} theme={theme} key={uuidv4()}/>)}
        </div>
    )
}