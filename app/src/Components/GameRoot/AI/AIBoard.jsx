import React from "react";
import {rankfiles} from "../../helpers/rankfiles";
import {fontSize} from "../../styles/fontSize.jss";
import {AiSquare} from "./AISquare";
import {useStyles} from "./AIBoard.jss";


export function AIBoard({theme, aiStart, aiDest}) {
    const classes = useStyles({fontSize})
    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            squares.push(
                <AiSquare rf={rf} theme={theme} aiStart={aiStart} aiDest={aiDest}/>
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