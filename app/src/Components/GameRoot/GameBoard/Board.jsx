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
import {AIBoard} from "../AI/AIBoard";
import {getStartingPieces} from "./getStartingPieces";

export const Board = ({ gameroot }) => {
    const [state, rangeDispatch] = useReducer(rangeReducer, {isDragging: false, rangeBoard: getBinaryBoarAllFalse()});
    const [pieces, piecesDispatch] = useReducer(piecesReducer, getStartingPieces(gameroot));

    const setRangeDisplay = (pieceId) => {
        if (pieceId) {
            rangeDispatch({
                type: "display-on",
                pieceId: pieceId,
                getRangeBoard: gameroot.getRangeBoard,
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
                        gameroot={gameroot}
                        dispatch={piecesDispatch}
                        setRangeDisplay={setRangeDisplay}
                    />
                    <DragLayer setRangeDisplay={setRangeDisplay} />
                    <RangeDisplayBoard
                        rangeBoard={state.rangeBoard}
                        theme={gameroot.state.theme}
                    />
                    <GameDisplayBoard theme={gameroot.state.theme} />
                    {gameroot.isAiTurn() && (
                        <AIDisplay
                            dispatch={piecesDispatch}
                            theme={gameroot.state.theme}
                            aiStart={gameroot.aiStart}
                            aiDest={gameroot.aiDest}
                            aiMakeMove={gameroot.aiMakeMove}
                        />
                    )}
                </DndProvider>
            </MediaQuery>
            <MediaQuery maxDeviceHeight={767}>
                <DndProvider backend={TouchBackend}>
                    <DropLayer
                        pieces={pieces}
                        gameroot={gameroot}
                        dispatch={piecesDispatch}
                        setRangeDisplay={setRangeDisplay}
                    />
                    <DragLayer setRangeDisplay={setRangeDisplay} />
                    <RangeDisplayBoard
                        rangeBoard={state.rangeBoard}
                        theme={gameroot.state.theme}
                    />
                    <GameDisplayBoard theme={gameroot.state.theme} />
                    {gameroot.isAiTurn() && (
                        <AIDisplay
                            dispatch={piecesDispatch}
                            theme={gameroot.state.theme}
                            aiStart={gameroot.aiStart}
                            aiDest={gameroot.aiDest}
                            aiMakeMove={gameroot.aiMakeMove}
                        />
                    )}
                </DndProvider>
            </MediaQuery>
        </>
    );
};
