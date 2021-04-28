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
    const lg = useMediaQuery("(min-width:960px)");

    useEffect(() => {
        function handleResize() {
            dispatch({ type: "reposition", gameRoot: gameRoot });
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const [state, dispatch] = useReducer(reducer, {
        isPromo: false,
        aiDisplay: false,
        hiddenPiece: null,
        ...updateOnResize(gameRoot),
    });

    return (
        <DndProvider options={HTML5toTouch}>
            <DropLayer
                state={state}
                dispatch={dispatch}
                gameRoot={gameRoot}
                theme={gameRoot.state.theme}
                sqrSize={lg ? state.sqrSizes.wide : state.sqrSizes.thin}
                boardSize={lg ? state.boardSizes.wide : state.boardSizes.thin}
                boardPos={lg ? state.boardPos.wide : state.boardPos.thin}
            />
            <DragLayer
                gameRoot={gameRoot}
                theme={gameRoot.state.theme}
                sqrSize={lg ? state.sqrSizes.wide : state.sqrSizes.thin}
                boardSize={lg ? state.boardSizes.wide : state.sqrSizes.thin}
                boardPos={lg ? state.boardPos.wide : state.boardPos.thin}
            />
            <GameDisplayBoard
                theme={gameRoot.state.theme}
                sqrSize={lg ? state.sqrSizes.wide : state.sqrSizes.thin}
                boardSize={lg ? state.boardSizes.wide : state.boardSizes.thin}
                boardPos={lg ? state.boardPos.wide : state.boardPos.thin}
            />
        </DndProvider>
    );
};

export default Board;
