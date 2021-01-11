import React from "react";
import {rankfiles} from "../../helpers/rankfiles";
import {GameDisplaySquare2} from "./GameDisplaySquare2";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./GameDisplayBoard.jss";

export function GameDisplayBoard2({theme}) {

    const classes = useStyles({fontSize: fontSize});

    const getDisplayBoard = () => {
        const displaySqrs = [];
        for (const rf of rankfiles) {
            displaySqrs.push(<GameDisplaySquare2 rf={rf} theme={theme}/>);
        }
        return displaySqrs;
    };

    return <div className={classes.display_board} style={{width: 512, height: 512, margin: 0, position: 'absolute', left: 0, top: 0}}>{getDisplayBoard()}</div>
}