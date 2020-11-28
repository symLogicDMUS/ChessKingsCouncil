import React from "react";
import {rankfiles} from "../../helpers/rankfiles";
import {AiSquare} from "./AISquare";
import {useStyles} from "./AIBoard.jss";


export function AIBoard({aiStart, aiDest}) {
    const classes = useStyles()
    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            squares.push(
                <AiSquare rf={rf} aiStart={aiStart} aiDest={aiDest}/>
            );
        }
        return squares;
    };
    return (
        <div
            className={classes.ai_board}
        >
            {getBoard()}
        </div>
    );
}