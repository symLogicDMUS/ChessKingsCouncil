import React from "react";
import {v4 as uuidv4} from "uuid";
import Backend from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import {Square} from "./Square";
import {Piece} from "./Piece";
import {GameDisplayBoard} from "./GameDisplayBoard";
import {getPieceImg} from "../../MyPieces/getPieceImg";
import {getPieceName} from "../../helpers/getPieceName";
import {rankfiles} from "../../helpers/rankfiles";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {useStyles} from "./Board.jss";

export function Board({ gameroot }) {

    const classes = useStyles({fontSize})

    const getInteractiveBoard = () => {
        const squares = [];
        let pieceImgBase64Str = null;
        let id = null;
        for (const rf of rankfiles) {
            if (gameroot.board[rf] === "#") {
                squares.push(
                    <Square key={uuidv4()} rf={rf} gameroot={gameroot} theme={gameroot.state.theme}>
                        {null}
                    </Square>
                );
            } else {
                id = gameroot.board[rf];
                pieceImgBase64Str = getPieceImg(id, gameroot.idDict, gameroot.pieceDefs);
                squares.push(
                    <Square key={uuidv4()} rf={rf} gameroot={gameroot} theme={gameroot.state.theme}>
                        <Piece
                            rf={rf}
                            id={id}
                            key={uuidv4()}
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
                <div className={classes.interactive_board}>{getInteractiveBoard()}</div>
            </DndProvider>
            <GameDisplayBoard theme={gameroot.state.theme} />
        </>
    );
}
