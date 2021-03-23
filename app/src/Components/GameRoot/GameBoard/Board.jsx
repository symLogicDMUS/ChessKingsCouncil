import React, {useEffect, useReducer} from "react";
import DragLayer from "./DragLayer";
import DropLayer from "./DropLayer";
import {DndProvider} from "react-dnd";
import MediaQuery from "react-responsive/src";
import {HTML5Backend} from "react-dnd-html5-backend";
import {TouchBackend} from "react-dnd-touch-backend";
import {GameDisplayBoard} from "./GameDisplayBoard";
import {viewHeight, viewWidth} from "../../helpers/windowMeasurments";
import {appBarHeight} from "../../Reuseables/Drawers/PersistentDrawer.jss";
import {reducer} from "./Board.red";

export const Board = ({ gameRoot }) => {
    const [state, dispatch] = useReducer(reducer, {
        sqrSizes: {
            desktop: viewHeight() * 0.11,
            mobile: viewWidth() * 0.11875
        },
        boardSizes: {
            desktop: viewHeight() * 0.11 * 8,
            mobile: viewWidth() * 0.11875 * 8,
        },
        boardPos: {
            desktop: {
                left: viewWidth() * 0.45 - viewHeight() * 0.11 * 8 * 0.5,
                top: viewHeight()*0.47 - viewHeight() * 0.11 * 8 * 0.5,
            },
            mobile: {
                left: viewWidth()*0.5 - viewWidth() * 0.11875*8 * 0.5,
                top: appBarHeight*1.1,
            },
        }
    });
    useEffect(() => {
        function handleResize() {
            dispatch({type: 'update'});
        }
        window.addEventListener("resize", handleResize);
        return (_) => {
            window.removeEventListener("resize", handleResize);
        };
    });

    return (
        <>
            <MediaQuery minWidth={1040}>
                <DndProvider backend={HTML5Backend}>
                    <DropLayer
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
            <MediaQuery maxWidth={1040}>
                <DndProvider backend={TouchBackend}>
                    <DropLayer
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
