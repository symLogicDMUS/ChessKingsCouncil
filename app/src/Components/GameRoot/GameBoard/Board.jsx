import React from "react";
import DragLayer from "./DragLayer";
import DropLayer from "./DropLayer";
import { DndProvider } from "react-dnd";
import MediaQuery from "react-responsive/src";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { GameDisplayBoard } from "./GameDisplayBoard";
import {sqrSizes, boardSizes, boardPos} from "../../Reuseables/Board/Board.jss";

export const Board = ({ gameRoot }) => {

    return (
        <>
            <MediaQuery minWidth={1040}>
                <DndProvider backend={HTML5Backend}>
                    <DropLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes.desktop}
                        boardSize={boardSizes.desktop}
                        theme={gameRoot.state.theme}
                    />
                    <DragLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes.desktop}
                        boardSize={boardSizes.desktop}
                        boardPos={boardPos.desktop}
                        theme={gameRoot.state.theme}
                    />
                    <GameDisplayBoard
                        theme={gameRoot.state.theme}
                        sqrSize={sqrSizes.desktop}
                        boardSize={boardSizes.desktop}
                    />
                </DndProvider>
            </MediaQuery>
            <MediaQuery maxWidth={1040}>
                <DndProvider backend={TouchBackend}>
                    <DropLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes.mobile}
                        boardSize={boardSizes.mobile}
                        theme={gameRoot.state.theme}
                    />
                    <DragLayer
                        gameRoot={gameRoot}
                        sqrSize={sqrSizes.mobile}
                        boardSize={boardSizes.mobile}
                        boardPos={boardPos.mobile}
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
