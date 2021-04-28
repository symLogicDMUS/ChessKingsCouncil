import React from "react";
import {DndProvider} from "react-dnd";
import MediaQuery from "react-responsive/src";
import {GameDisplayBoard} from "./GameDisplayBoard";

const DropLayer = React.lazy(() => import('./DropLayer'));
const DragLayer = React.lazy(() => import('./DragLayer'));

export function DndLayers(props) {
    return <>
        <MediaQuery minWidth={960}>
            <DndProvider backend={props.backend}>
                <DropLayer
                    state={props.state}
                    dispatch={props.dispatch}
                    gameRoot={props.gameRoot}
                    sqrSize={props.state.sqrSizes.wide}
                    boardSize={props.state.boardSizes.wide}
                    boardPos={props.state.boardPos.wide}
                    theme={props.gameRootState.theme}
                />
                <DragLayer
                    gameRoot={props.gameRoot}
                    sqrSize={props.state.sqrSizes.wide}
                    boardSize={props.state.boardSizes.wide}
                    boardPos={props.state.boardPos.wide}
                    theme={props.gameRootState.theme}
                />
                <GameDisplayBoard
                    theme={props.gameRootState.theme}
                    sqrSize={props.state.sqrSizes.wide}
                    boardSize={props.state.boardSizes.wide}
                    boardPos={props.state.boardPos.wide}
                />
            </DndProvider>
        </MediaQuery>
        <MediaQuery maxWidth={960}>
            <DndProvider backend={props.backend}>
                <DropLayer
                    state={props.state}
                    dispatch={props.dispatch}
                    gameRoot={props.gameRoot}
                    sqrSize={props.state.sqrSizes.thin}
                    boardSize={props.state.boardSizes.thin}
                    boardPos={props.state.boardPos.thin}
                    theme={props.gameRootState.theme}
                />
                <DragLayer
                    gameRoot={props.gameRoot}
                    sqrSize={props.state.sqrSizes.thin}
                    boardSize={props.state.boardSizes.thin}
                    boardPos={props.state.boardPos.thin}
                    theme={props.gameRootState.theme}
                />
                <GameDisplayBoard
                    theme={props.gameRootState.theme}
                    sqrSize={props.state.sqrSizes.thin}
                    boardSize={props.state.boardSizes.thin}
                    boardPos={props.state.boardPos.thin}
                />
            </DndProvider>
        </MediaQuery>
    </>;
}