import React, { useState } from "react";
import { rankfiles } from "../../../helpers/rankfiles";
import { getPieceImg } from "../../../MyPieces/getPieceImg";
import { RangeSquare } from "./RangeSquare";
import { RangePiece } from "./RangePiece";
import {useStyles} from "./RangeBoard.jss";
import {getPieceName} from "../../../helpers/getPieceName";


export function RangeBoard({ allRanges, board, idDict, pieceDefs }) {
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
                    <RangeSquare rf={rf} isHighlight={isRfPartOfRange(rf)} board={board}>
                        {null}
                    </RangeSquare>
                );
            } else {
                squares.push(
                    <RangeSquare rf={rf} isHighlight={isRfPartOfRange(rf)} board={board}>
                        <RangePiece
                            id={board[rf]}
                            toggleDisplayOfPieceRange={toggleDisplayOfPieceRange}
                            pieceImgBase64Str={getPieceImg(board[rf], idDict, pieceDefs)}
                            alt={getPieceName(board[rf], idDict)}
                        />
                    </RangeSquare>
                );
            }
        }
        return squares;
    };

    return <div className={classes.board}>{getBoard()}</div>;
}