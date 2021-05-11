import React, {useEffect, useReducer} from "react";
import { DndProvider } from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { GameDisplayBoard } from "./GameDisplayBoard";
import { updateOnResize } from "./updateOnResize";
import {useMediaQuery} from "@material-ui/core";
import DropLayer from "./DropLayer";
import DragLayer from "./DragLayer";
import { reducer } from "./Board.red";

const Board = ({ gameRoot }) => {

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

    const lg = useMediaQuery("(min-width:960px)");

    const sqrSize = lg ? state.sqrSizes.wide : state.sqrSizes.thin
    const boardSize = lg ? state.boardSizes.wide : state.boardSizes.thin
    const boardPos = lg ? state.boardPos.wide : state.boardPos.thin

    return (
        <DndProvider options={HTML5toTouch}>
            <DropLayer
                state={state}
                dispatch={dispatch}
                gameRoot={gameRoot}
                sqrSize={sqrSize}
                boardSize={boardSize}
                boardPos={boardPos}
                theme={gameRoot.state.theme}
            />
            <DragLayer
                gameRoot={gameRoot}
                sqrSize={sqrSize}
                boardSize={boardSize}
                boardPos={boardPos}
                theme={gameRoot.state.theme}
            />
            <GameDisplayBoard
                sqrSize={sqrSize}
                boardSize={boardSize}
                boardPos={boardPos}
                theme={gameRoot.state.theme}
            />
        </DndProvider>
    );
};

export default Board;
