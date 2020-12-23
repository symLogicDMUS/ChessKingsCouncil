import React from "react";
import "../../helpers/stepFuncs";
import { rankfiles } from "./rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import { CreatePieceSquare as Square } from "./CreatePieceSquare";
import { CreatePiecePiece as Piece } from "./CreatePiecePiece";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "./CreatePieceBoard.jss";

export function CreatePieceBoard({
    theme,
    offsets,
    pieceLoc,
    spanDisplays,
    toggleOffset,
    showSpanText,
    showOffsetText,
    pieceImgBase64Str,
}) {
    const classes = useStyles({fontSize});

    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            if (rf === pieceLoc) {
                squares.push(
                    <Square
                        rf={rf}
                        theme={theme}
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
                        theme={theme}
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

    return <div className={classes.board}>{getBoard()}</div>;
}
