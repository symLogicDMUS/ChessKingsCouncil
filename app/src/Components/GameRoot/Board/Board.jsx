import React from "react";
import Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Square } from "./Square";
import { Piece } from "./Piece";
import { getPieceImg } from "../../MyPieces/getPieceImg";
import { DisplaySquare } from "./DisplaySquare";
import { getPieceName } from "../../helpers/getPieceName";
import { rankfiles } from "../../helpers/rankfiles"
import { useStyles } from "./Board.jss";

export function Board({ gameroot }) {

    const classes = useStyles()

    const getDisplayBoard = () => {
        const displaySqrs = [];
        for (const rf of rankfiles) {
            displaySqrs.push(<DisplaySquare rf={rf} />);
        }
        return displaySqrs;
    };

    const getInteractiveBoard = () => {
        const squares = [];
        let pieceImgBase64Str = null;
        let id = null;
        for (const rf of rankfiles) {
            if (gameroot.board[rf] === "#") {
                squares.push(
                    <Square rf={rf} gameroot={gameroot}>
                        {null}
                    </Square>
                );
            } else {
                id = gameroot.board[rf];
                pieceImgBase64Str = getPieceImg(id, gameroot.idDict, gameroot.pieceDefs);
                squares.push(
                    <Square rf={rf} gameroot={gameroot}>
                        <Piece
                            rf={rf}
                            id={id}
                            pieceImgBase64Str={pieceImgBase64Str}
                            alt={getPieceName(id, gameroot.idDict)}
                        />
                    </Square>
                );
            }
        }
        return squares;
    };

    return (
        <>
            <DndProvider backend={Backend}>
                <div style={classes.interactive_board}>{getInteractiveBoard()}</div>
            </DndProvider>
            <div style={classes.display_board}>{getDisplayBoard()}</div>
        </>
    );
}
