import React from "react";
import {v4 as uuidv4} from 'uuid';
import {AiSquare} from "./AISquare";
import {rankfiles} from "../../helpers/rankfiles";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./AIBoard.jss";


export function AIBoard({theme, aiStart, aiDest}) {
    const classes = useStyles({fontSize, theme: theme})
    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            squares.push(
                <AiSquare rf={rf} key={uuidv4()} theme={theme} aiStart={aiStart} aiDest={aiDest}/>
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