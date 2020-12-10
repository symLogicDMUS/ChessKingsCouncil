import React from "react";
import { rankfiles } from "./rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import { CreatePieceSquare as Square } from "./CreatePieceSquare";
import { CreatePiecePiece as Piece } from "./CreatePiecePiece";
import "../../helpers/stepFuncs";
import { useStyles } from "./CreatePieceBoard.jss";

export function CreatePieceBoard({
    offsets,
    spanDisplays,
    toggleOffset,
    showSpanText,
    showOffsetText,
    pieceLoc,
    pieceImgBase64Str,
}) {
    const classes = useStyles();

    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            if (rf === pieceLoc) {
                squares.push(
                    <Square
                        rf={rf}
                        isLightSqr={binaryBoard[rf]}
                        isSpan={spanDisplays[rf]}
                        toggleOffset={toggleOffset}
                        isOffset={offsets[rf]}
                        pieceLoc={pieceLoc}
                        showSpanText={showSpanText}
                        showOffsetText={showOffsetText}
                    >
                        <Piece pieceImgBase64Str={pieceImgBase64Str} />
                    </Square>
                );
            } else {
                squares.push(
                    <Square
                        rf={rf}
                        isLightSqr={binaryBoard[rf]}
                        isSpan={spanDisplays[rf]}
                        toggleOffset={toggleOffset}
                        isOffset={offsets[rf]}
                        pieceLoc={pieceLoc}
                        showSpanText={showSpanText}
                        showOffsetText={showOffsetText}
                    >
                        {null}
                    </Square>
                );
            }
        }
        return squares;
    };

    return <div className={classes.board}>{getBoard()};</div>;
}
