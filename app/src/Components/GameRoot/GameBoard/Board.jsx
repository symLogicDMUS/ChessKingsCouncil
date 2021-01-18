import React, { useReducer } from "react";
import MediaQuery from "react-responsive/src";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import {sqrSizes, boardSizes, boardPos} from "../../Reuseables/Board.jss";
import { GameDisplayBoard } from "./GameDisplayBoard";
import DragLayer from "./DragLayer";
import DropLayer from "./DropLayer";

export const Board = ({ gameRoot }) => {

    const setRangeDisplay = (pieceId) => {

    };

    return (
        <>
            <MediaQuery minDeviceHeight={768}>
                <DndProvider backend={HTML5Backend}>
                    <DropLayer
                        gameRoot={gameRoot}
                        setRangeDisplay={setRangeDisplay}
                        sqrSize={sqrSizes.desktop}
                        boardSize={boardSizes.desktop}
                    />
                    <DragLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes.desktop}
                        boardSize={boardSizes.desktop}
                        boardPos={boardPos.desktop}
                        setRangeDisplay={setRangeDisplay}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard
                        theme={gameRoot.state.theme}
                        sqrSize={sqrSizes.desktop}
                        boardSize={boardSizes.desktop}
                    />
                </DndProvider>
            </MediaQuery>
            <MediaQuery maxDeviceHeight={767}>
                <DndProvider backend={TouchBackend}>
                    <DropLayer
                        gameRoot={gameRoot}
                        setRangeDisplay={setRangeDisplay}
                        sqrSize={sqrSizes.mobile}
                        boardSize={boardSizes.mobile}
                    />
                    <DragLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes.mobile}
                        boardSize={boardSizes.mobile}
                        boardPos={boardPos.mobile}
                        setRangeDisplay={setRangeDisplay}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard
                        theme={gameRoot.state.theme}
                        sqrSize={sqrSizes.mobile}
                        boardSize={boardSizes.mobile}
                    />
                </DndProvider>
            </MediaQuery>
        </>
    );
};
