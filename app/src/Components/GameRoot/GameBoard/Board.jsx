import React, { useReducer, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import MediaQuery from "react-responsive/src";
import { reducer as rangeReducer } from "./reducers/Board.red";
import { reducer as piecesReducer } from "./reducers/DropLayer.red";
import DragLayer from "./DragLayer";
import { DropLayer } from "./DropLayer";
import { GameDisplayBoard } from "./GameDisplayBoard";
import { AIDisplay } from "../AI/AIDisplay";
import { RangeDisplayBoard } from "./RangeDisplayBoard";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";
import {getStartingPieces} from "./getStartingPieces";

export const Board = ({ gameRoot }) => {
    const [state, rangeDispatch] = useReducer(rangeReducer, {isDragging: false, rangeBoard: getBinaryBoarAllFalse()});
    const [pieces, piecesDispatch] = useReducer(piecesReducer, getStartingPieces(gameRoot));

    const setRangeDisplay = (pieceId) => {
        if (pieceId) {
            rangeDispatch({
                type: "display-on",
                pieceId: pieceId,
                getRangeBoard: gameRoot.getRangeBoard,
            });
        } else {
            rangeDispatch({ type: "display-off" });
        }
    };

    return (
        <>
            <MediaQuery minDeviceHeight={768}>
                <DndProvider backend={HTML5Backend}>
                    <DropLayer
                        pieces={pieces}
                        gameRoot={gameRoot}
                        dispatch={piecesDispatch}
                        setRangeDisplay={setRangeDisplay}
                    />
                    <DragLayer setRangeDisplay={setRangeDisplay} />
                    <RangeDisplayBoard
                        rangeBoard={state.rangeBoard}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard theme={gameRoot.state.theme} />
                    {gameRoot.isAiTurn() && (
                        <AIDisplay
                            dispatch={piecesDispatch}
                            theme={gameRoot.state.theme}
                            aiStart={gameRoot.aiStart}
                            aiDest={gameRoot.aiDest}
                            aiMakeMove={gameRoot.aiMakeMove}
                        />
                    )}
                </DndProvider>
            </MediaQuery>
            <MediaQuery maxDeviceHeight={767}>
                <DndProvider backend={TouchBackend}>
                    <DropLayer
                        pieces={pieces}
                        gameRoot={gameRoot}
                        dispatch={piecesDispatch}
                        setRangeDisplay={setRangeDisplay}
                    />
                    <DragLayer setRangeDisplay={setRangeDisplay} />
                    <RangeDisplayBoard
                        rangeBoard={state.rangeBoard}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard theme={gameRoot.state.theme} />
                    {gameRoot.isAiTurn() && (
                        <AIDisplay
                            dispatch={piecesDispatch}
                            theme={gameRoot.state.theme}
                            aiStart={gameRoot.aiStart}
                            aiDest={gameRoot.aiDest}
                            aiMakeMove={gameRoot.aiMakeMove}
                        />
                    )}
                </DndProvider>
            </MediaQuery>
        </>
    );
};
