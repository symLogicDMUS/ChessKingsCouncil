import React from "react";
import {src} from "./dragonSrcStr";
import {rankfiles} from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import {PartialRangePiece as Piece} from "../PartialRangeModal/PartialRangePiece";
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {board} from "../../Reuseables/Board.jss";
import {useStyles} from "./SampleRangeBoard.jss";

export function SampleRangeBoard({fontSize, theme}) {

    const classes = useStyles({theme: theme, fontSize: fontSize});

    const locationC3 = 'c3'
    const sampleBoardObj = getBinaryBoarAllFalse()
    for (const rf of ['d4', 'e5', 'f6', 'g7', 'h8']) {
        sampleBoardObj[rf] = true
    }

    const getBoard = () => {
        const squares = [];
        for (let rf of rankfiles) {
            if (rf === locationC3) {
                squares.push(
                    <div key={rf}
                         className={sampleBoardObj[rf] ? classes.span :
                         (binaryBoard[rf] ? classes.light_normal : classes.dark_normal)}
                    >
                        <Piece
                            src={src}
                            key={rf + '-piece'}
                        />
                    </div>
                );
            } else {
                squares.push(
                    <div key={rf}
                         className={sampleBoardObj[rf] ? classes.span :
                             (binaryBoard[rf] ? classes.light_normal : classes.dark_normal)}
                    >
                        {null}
                    </div>
                );
            }
        }
        return squares;
    };


    return (
        <div style={board(fontSize)}>
            {getBoard()}
        </div>
    );
}
