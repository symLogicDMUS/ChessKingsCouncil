import React, { useEffect, useMemo, useReducer } from "react";
import DragLayer from "./DragLayer";
import DropLayer from "./DropLayer";
import { DndProvider } from "react-dnd";
import MediaQuery from "react-responsive/src";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { GameDisplayBoard } from "./GameDisplayBoard";
import { reducer, updateOnResize } from "./Board.red";

export const Board = ({ gameRoot }) => {
    const dndBackend = useMemo(() => {
        if (gameRoot.isTouchscreen) {
            return TouchBackend;
        } else {
            return HTML5Backend;
        }
    }, []);

    const [state, dispatch] = useReducer(reducer, {
        isPromo: false,
        aiDisplay: false,
        hiddenPiece: null,
        ...updateOnResize(gameRoot),
    });
    useEffect(() => {
        function handleResize() {
            dispatch({ type: "reposition", gameRoot: gameRoot });
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            <MediaQuery minWidth={960}>
                <DndProvider backend={dndBackend}>
                    <DropLayer
                        state={state}
                        dispatch={dispatch}
                        gameRoot={gameRoot}
                        sqrSize={state.sqrSizes.desktop}
                        boardSize={state.boardSizes.desktop}
                        boardPos={state.boardPos.desktop}
                        theme={gameRoot.state.theme}
                    />
                    <DragLayer
                        gameRoot={gameRoot}
                        sqrSize={state.sqrSizes.desktop}
                        boardSize={state.boardSizes.desktop}
                        boardPos={state.boardPos.desktop}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard
                        theme={gameRoot.state.theme}
                        sqrSize={state.sqrSizes.desktop}
                        boardSize={state.boardSizes.desktop}
                        boardPos={state.boardPos.desktop}
                    />
                </DndProvider>
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <DndProvider backend={dndBackend}>
                    <DropLayer
                        state={state}
                        dispatch={dispatch}
                        gameRoot={gameRoot}
                        sqrSize={state.sqrSizes.mobile}
                        boardSize={state.boardSizes.mobile}
                        boardPos={state.boardPos.mobile}
                        theme={gameRoot.state.theme}
                    />
                    <DragLayer
                        gameRoot={gameRoot}
                        sqrSize={state.sqrSizes.mobile}
                        boardSize={state.boardSizes.mobile}
                        boardPos={state.boardPos.mobile}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard
                        theme={gameRoot.state.theme}
                        sqrSize={state.sqrSizes.mobile}
                        boardSize={state.boardSizes.mobile}
                        boardPos={state.boardPos.mobile}
                    />
                </DndProvider>
            </MediaQuery>
        </>
    );
};
