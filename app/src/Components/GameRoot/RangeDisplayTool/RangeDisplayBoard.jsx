import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { rankfiles } from "../../helpers/rankfiles";
import { getPieceImg } from "../../MyPieces/getPieceImg";
import { getPieceName } from "../../helpers/getPieceName";
import { RangeDisplaySquare as Square } from "./RangeDisplaySquare";
import { RangeDisplayPiece as Piece } from "./RangeDisplayPiece";
import { smallBoardFontSize as fontSize } from "../../styles/fontSize.jss";
import { useStyles } from "./RangeDisplayBoard.jss";

export function RangeDisplayBoard({
    theme,
    screenCase,
    allRanges,
    board,
    idDict,
    pieceDefs,
}) {
    let [pieceId, setPieceId] = useState(null);

    const classes = useStyles({ theme: theme, fontSize: screenCase === 'mobile' ? fontSize*1.1 : fontSize });

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
                    <Square
                        key={uuidv4()}
                        rf={rf}
                        theme={theme}
                        board={board}
                        screenCase={screenCase}
                        isHighlight={isRfPartOfRange(rf)}
                    >
                        {null}
                    </Square>
                );
            } else {
                squares.push(
                    <Square
                        key={uuidv4()}
                        rf={rf}
                        theme={theme}
                        board={board}
                        screenCase={screenCase}
                        isHighlight={isRfPartOfRange(rf)}
                    >
                        <Piece
                            id={board[rf]}
                            key={uuidv4()}
                            toggleDisplayOfPieceRange={
                                toggleDisplayOfPieceRange
                            }
                            pieceImgBase64Str={getPieceImg(
                                board[rf],
                                idDict,
                                pieceDefs
                            )}
                            alt={getPieceName(board[rf], idDict)}
                        />
                    </Square>
                );
            }
        }
        return squares;
    };

    return <div className={classes.board}>{getBoard()}</div>;
}
