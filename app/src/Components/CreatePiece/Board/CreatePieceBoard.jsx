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
    fontSize,
    offsets,
    pieceLoc,
    spanDisplays,
    toggleOffset,
    pieceImgBase64Str,
}) {
    const classes = useStyles({ fontSize: fontSize });

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
                        fontSize={fontSize}
                    >
                        <Piece
                            pieceImgBase64Str={pieceImgBase64Str}
                            key={uuidv4()}
                            rf={rf.toUpperCase()}
                            isLightSqr={binaryBoard[rf]}
                            theme={theme}
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
                        fontSize={fontSize}
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
