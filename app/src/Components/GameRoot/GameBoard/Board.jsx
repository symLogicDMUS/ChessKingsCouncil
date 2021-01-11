import React, { useReducer, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import MediaQuery from "react-responsive/src";
import { reducer } from "./reducers/Board";
import DragLayer from "./DragLayer";
import { DropLayer } from "./DropLayer";
import { GameDisplayBoard } from "./GameDisplayBoard";
import { AIDisplay } from "../AI/AIDisplay";
import { RangeDisplayBoard } from "./RangeDisplayBoard";
import { getBinaryBoarAllFalse } from "../../helpers/getBinaryBoardAllFalse";

export const Board = ({ gameroot }) => {
    const [rangeBoard, dispatch] = useReducer(reducer, getBinaryBoarAllFalse());

    const setRangeDisplay = (pieceId) => {
        if (pieceId) {
            dispatch({
                type: "display-on",
                pieceId: pieceId,
                getRangeBoard: gameroot.getRangeBoard,
            });
        } else {
            dispatch({ type: "display-off" });
        }
    };

    return (
        <>
            <MediaQuery minDeviceHeight={768}>
                <DndProvider backend={HTML5Backend}>
                    <DropLayer
                        gameroot={gameroot}
                        setRangeDisplay={setRangeDisplay}
                    />
                    <DragLayer />
                    <RangeDisplayBoard
                        rangeBoard={rangeBoard}
                        theme={gameroot.state.theme}
                    />
                    <GameDisplayBoard theme={gameroot.state.theme} />
                    {gameroot.isAiTurn() && (
                        <AIDisplay
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
                        gameroot={gameroot}
                        setRangeDisplay={setRangeDisplay}
                    />
                    <DragLayer />
                    <RangeDisplayBoard
                        rangeBoard={rangeBoard}
                        theme={gameroot.state.theme}
                    />
                    <GameDisplayBoard theme={gameroot.state.theme} />
                    {gameroot.isAiTurn() && (
                        <AIDisplay
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
