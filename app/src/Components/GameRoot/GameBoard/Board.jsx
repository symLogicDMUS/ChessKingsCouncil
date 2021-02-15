import React from "react";
import DragLayer from "./DragLayer";
import DropLayer from "./DropLayer";
import { DndProvider } from "react-dnd";
import MediaQuery from "react-responsive/src";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { GameDisplayBoard } from "./GameDisplayBoard";
import {sqrSizes, boardSizes, boardPos} from "../../Reuseables/Board.jss";
import {resolveScreenCase} from "../../helpers/resolveScreenCase";

export const Board = ({ gameRoot }) => {

    return (
        <>
            <MediaQuery minAspectRatio={'1001/1000'} minDeviceWidth={768}>
                <DndProvider backend={HTML5Backend}>
                    <DropLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes['desktop']}
                        boardSize={boardSizes['desktop']}
                    />
                    <DragLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes['desktop']}
                        boardSize={boardSizes['desktop']}
                        boardPos={boardPos['desktop']}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard
                        theme={gameRoot.state.theme}
                        sqrSize={sqrSizes['desktop']}
                        boardSize={boardSizes['desktop']}
                    />
                </DndProvider>
            </MediaQuery>
            <MediaQuery maxAspectRatio={'1/1'}>
                <DndProvider backend={TouchBackend}>
                    <DropLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes[resolveScreenCase('mobile')]}
                        boardSize={boardSizes[resolveScreenCase('mobile')]}
                    />
                    <DragLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes[resolveScreenCase('mobile')]}
                        boardSize={boardSizes[resolveScreenCase('mobile')]}
                        boardPos={boardPos[resolveScreenCase('mobile')]}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard
                        theme={gameRoot.state.theme}
                        sqrSize={sqrSizes[resolveScreenCase('mobile')]}
                        boardSize={boardSizes[resolveScreenCase('mobile')]}
                    />
                </DndProvider>
            </MediaQuery>
        </>
    );
};
