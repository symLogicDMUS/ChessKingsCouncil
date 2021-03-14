import React from "react";
import {src} from "./dragonSrcStr";
import {rankfiles} from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import {PartialRangePiece as Piece} from "../PartialRangeModal/PartialRangePiece";
import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {board} from "../../Reuseables/Board/Board.jss";
import {SampleRangeSquare} from "./SampleRangeSquare";

export function SampleRangeBoard({fontSize, theme}) {

    const locationC3 = 'c3'
    const sampleBoardObj = getBinaryBoarAllFalse()
    for (const rf of ['d4', 'e5', 'f6', 'g7', 'h8']) {
        sampleBoardObj[rf] = true
    }

    const getBoard = () => {
        const squares = [];
        for (let rf of rankfiles) {
            if (rf === locationC3) {
                squares.push
                (
                    <SampleRangeSquare isLightSqr={binaryBoard[rf]} isSpan={sampleBoardObj[rf]} rf={rf} key={rf} fontSize={fontSize} theme={theme}>
                        <Piece
                            src={src}
                            key={rf + '-piece'}
                        />
                    </SampleRangeSquare>
                );
            } else {
                squares.push
                (
                    <SampleRangeSquare isLightSqr={binaryBoard[rf]} isSpan={sampleBoardObj[rf]} rf={rf} key={rf} fontSize={fontSize} theme={theme}>
                        {null}
                    </SampleRangeSquare>
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
