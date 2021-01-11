import React from "react";
import {v4 as uuidv4} from "uuid";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from 'react-dnd-touch-backend'
import {backendOptions} from "./hasNative";
import MediaQuery from "react-responsive/src";
import {getPieceImg} from "../../MyPieces/getPieceImg";
import {getPieceName} from "../../helpers/getPieceName";
import {rankfiles} from "../../helpers/rankfiles";
import {largeBoardFontSize as fontSize} from "../../styles/fontSize.jss";
import {GameDisplayBoard} from "./GameDisplayBoard";
import {Square} from "./Square";
import {Piece} from "./Piece";
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
                pieceImgBase64Str = getPieceImg(id, gameroot.idDict, gameroot.defs);
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
            <MediaQuery minDeviceWidth={768}>
                <DndProvider backend={HTML5Backend}>
                    <div className={classes.interactive_board}>{getInteractiveBoard()}</div>
                </DndProvider>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={767}>
                <DndProvider backend={TouchBackend} options={backendOptions}>
                    <div className={classes.interactive_board}>{getInteractiveBoard()}</div>
                </DndProvider>
            </MediaQuery>
            <GameDisplayBoard theme={gameroot.state.theme} />
        </>
    );
}
