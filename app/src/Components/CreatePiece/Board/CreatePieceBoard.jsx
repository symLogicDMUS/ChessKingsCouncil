import React, {useState} from "react";
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

    const [pieceKey, setPieceKey] = useState(uuidv4())

    const getBoard = () => {
        let squares = [];
        for (const rf of rankfiles) {
            if (rf === pieceLoc) {
                squares.push(
                    <Square
                        rf={rf}
                        key={rf}
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
                            theme={theme}
                            key={pieceKey}
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
                        key={rf}
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
