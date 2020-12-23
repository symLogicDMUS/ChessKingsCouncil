import React from "react";
import {rankfiles} from "../../helpers/rankfiles";
import {GameDisplaySquare} from "./GameDisplaySquare";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./GameDisplayBoard.jss";

export function GameDisplayBoard({theme}) {

    const classes = useStyles({fontSize: fontSize});

    const getDisplayBoard = () => {
        const displaySqrs = [];
        for (const rf of rankfiles) {
            displaySqrs.push(<GameDisplaySquare rf={rf} theme={theme}/>);
        }
        return displaySqrs;
    };

    return <div className={classes.display_board}>{getDisplayBoard()}</div>
}