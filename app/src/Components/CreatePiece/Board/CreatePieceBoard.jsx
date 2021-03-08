import React from "react";
import { v4 as uuidv4 } from "uuid";
import "../../helpers/stepFuncs";
import { rankfiles } from "../../helpers/rankfiles";
import { binaryBoard } from "../../helpers/binaryBoard";
import { CreatePieceSquare as Square } from "./CreatePieceSquare";
import { CreatePiecePiece as Piece } from "./CreatePiecePiece";
import { useStyles } from "./CreatePieceBoard.jss";

export function CreatePieceBoard({
    theme,
    offsets,
    pieceLoc,
    spanDisplays,
    toggleOffset,
    pieceImgBase64Str,
    screenCase,
    showSpanText,
    showOffsetText
}) {
    const classes = useStyles();

    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            if (rf === pieceLoc) {
                squares.push(
                    <Square
                        rf={rf}
                        key={uuidv4()}
                        theme={theme}
                        isLightSqr={binaryBoard[rf]}
                        isSpan={spanDisplays[rf]}
                        toggleOffset={toggleOffset}
                        isOffset={offsets[rf]}
                        pieceLoc={pieceLoc}
                        screenCase={screenCase}
                        showSpanText={showSpanText}
                        showOffsetText={showOffsetText}

                    >
                        <Piece
                            key={uuidv4()}
                            theme={theme}
                            rf={rf.toUpperCase()}
                            isLightSqr={binaryBoard[rf]}
                            pieceImgBase64Str={pieceImgBase64Str}
                        />
                    </Square>
                );
            } else {
                squares.push(
                    <Square
                        rf={rf}
                        key={uuidv4()}
                        theme={theme}
                        isLightSqr={binaryBoard[rf]}
                        isSpan={spanDisplays[rf]}
                        toggleOffset={toggleOffset}
                        isOffset={offsets[rf]}
                        pieceLoc={pieceLoc}
                        screenCase={screenCase}
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
