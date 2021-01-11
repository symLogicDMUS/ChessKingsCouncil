import React from "react";
import clsx from "clsx";
import {v4 as uuidv4} from "uuid";
import "../../helpers/stepFuncs";
import { rankfiles } from "../../helpers/rankfiles";
import {binaryBoard} from "../../helpers/binaryBoard";
import { CreatePieceSquare as Square } from "./CreatePieceSquare";
import { CreatePiecePiece as Piece } from "./CreatePiecePiece";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import { useStyles } from "./CreatePieceBoard.jss";

export function CreatePieceBoard({
    theme,
    screenCase,
    offsets,
    pieceLoc,
    spanDisplays,
    toggleOffset,
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
                        key={uuidv4()}
                        theme={theme}
                        isLightSqr={binaryBoard[rf]}
                        isSpan={spanDisplays[rf]}
                        toggleOffset={toggleOffset}
                        isOffset={offsets[rf]}
                        pieceLoc={pieceLoc}
                    >
                        <Piece pieceImgBase64Str={pieceImgBase64Str} key={uuidv4()} />
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
                    >
                        {null}
                    </Square>
                );
            }
        }
        return squares;
    };

    return <div className={clsx(classes.board, { [classes.board_mobile]: screenCase === 'mobile' } )}>{getBoard()}</div>;
}
