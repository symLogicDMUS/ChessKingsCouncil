import React, { useState } from "react";
import { rankfiles } from "../../../helpers/rankfiles";
import { getPieceImg } from "../../../MyPieces/getPieceImg";
import {getPieceName} from "../../../helpers/getPieceName";
import { RangeDisplaySquare } from "./RangeDisplaySquare";
import { RangePiece } from "./RangePiece";
import {useStyles} from "./RangeDisplayBoard.jss";


export function RangeDisplayBoard({theme, allRanges, board, idDict, pieceDefs }) {
    let [pieceId, setPieceId] = useState(null);
    const classes = useStyles()
    
    const toggleDisplayOfPieceRange = (newPieceId) => {
        /**Used by RangePiece. triggered when piece clicked on. triggers new traversal of squares  */
        if (pieceId === newPieceId) setPieceId(null);
        else setPieceId(newPieceId);
    };

    const isRfPartOfRange = (rf) => {
        /**use in traversal over all squares. Is rf part of range of last clicked piece*/
        if (pieceId === null) return false;

        if (!Object.keys(allRanges).includes(pieceId)) return false;

        if (allRanges[pieceId].includes(rf)) return true;

        if (board[rf] === pieceId) return true;
    };

    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            if (board[rf] === "#") {
                squares.push(
                    <RangeDisplaySquare rf={rf} theme={theme} isHighlight={isRfPartOfRange(rf)} board={board}>
                        {null}
                    </RangeDisplaySquare>
                );
            } else {
                squares.push(
                    <RangeDisplaySquare rf={rf} theme={theme} isHighlight={isRfPartOfRange(rf)} board={board}>
                        <RangePiece
                            id={board[rf]}
                            toggleDisplayOfPieceRange={toggleDisplayOfPieceRange}
                            pieceImgBase64Str={getPieceImg(board[rf], idDict, pieceDefs)}
                            alt={getPieceName(board[rf], idDict)}
                        />
                    </RangeDisplaySquare>
                );
            }
        }
        return squares;
    };

    return <div className={classes.board}>{getBoard()}</div>;
}