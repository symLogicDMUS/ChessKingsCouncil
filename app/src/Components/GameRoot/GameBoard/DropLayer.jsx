import React, {useEffect, useReducer} from "react";
import {useDrop} from "react-dnd";
import {isLegal} from "../Move/isLegal";
import {move} from "../Move/move";
import {ItemTypes} from "./ItemTypes";
import {getCoords} from "./getCoords";
import {renderPiece} from "./renderPiece.js";
import {Portal} from "@material-ui/core";
import Promo from "../Promo/Promo";
import {AIMove} from "./AIMove";
import {getAiMove} from "../../../API/apiHelpers/getAiMove";
import {noRanges} from "../../../game_logic/fenParser/GameStatus/noRanges";
import {idDict} from "../../../game_logic/testObjects/standardIdDict";
import {rfToXy, xyToPx} from "./DndCrdCnvrt";
import {OVER} from "../../helpers/gStatusTypes";
import {getStartingPieces} from "./getStartingPieces";
import {reducer} from "./reducers/DropLayer.red";
import {useStyles} from "./DropLayer.jss";

/**
 * Sits on top of game boards. updated on drop.
 */
const DropLayer = ({gameRoot, sqrSize, boardSize, theme}) => {
    const [state, dispatch] = useReducer(
        reducer,
        {pieces: getStartingPieces(gameRoot, sqrSize), isPromo: false, aiDisplay: false, hiddenPiece: null}
    );

    const classes = useStyles({boardSize: boardSize});

    const [, drop] = useDrop({
        accept: ItemTypes,
        canDrop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta, sqrSize);
            return isLegal(gameRoot, item, start, dest);
        },
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta, sqrSize);
            move(gameRoot, sqrSize, boardSize, item.id, state.pieces, start, dest, left, top, dispatch);
            if (gameRoot.specialMoves.isPromo([start, dest])) {
                gameRoot.specialMoves.promoStart = start;
                gameRoot.specialMoves.promoDest = dest;
                gameRoot.specialMoves.removePromo([start, dest]);
                dispatch({type: 'begin-promo'})
            } else {
                finishMove(start, dest);
            }
            return undefined;
        },
    });

    /** where the game logic gets updated after each move */
    useEffect(() => {
        if (gameRoot.aiColor === gameRoot.turn) {
            if (!noRanges(gameRoot.ranges) && gameRoot.gameStatus.status !== OVER) {
                [
                    gameRoot.aiCapture,
                    gameRoot.aiStart,
                    gameRoot.aiDest,
                ] = getAiMove(
                    gameRoot.board,
                    gameRoot.ranges,
                    gameRoot.aiColor,
                    gameRoot.specialMoves
                );
                dispatch({type: 'ai-begin', board: gameRoot.board, aiStart: gameRoot.aiStart})
            }
        }
    }, [gameRoot.turn]);

    useEffect(() => {
        if (gameRoot.state.saveProcess) {
            gameRoot.save(state.pieces)
        }
    }, [gameRoot.state.saveProcess])

    useEffect(() => {
        dispatch({type: 'update-imgs', idDict: gameRoot.idDict, defs: gameRoot.defs, theme: theme, gameType: gameRoot.gameType})
    }, [theme])

    const aiMoveComponent = (aiStart, aiDest, sqrSize) => {
        let [destX, destY] = rfToXy(aiDest);
        let [destLeft, destTop] = xyToPx(destX, destY, sqrSize);
        let pieceId = gameRoot.board[aiStart];
        move(
            gameRoot,
            sqrSize,
            boardSize,
            pieceId,
            state.pieces,
            aiStart,
            aiDest,
            destLeft,
            destTop,
            dispatch
        );
        if (gameRoot.specialMoves.isPromo([aiStart, aiDest])) {
            gameRoot.specialMoves.promoStart = aiStart;
            gameRoot.specialMoves.promoDest = aiDest;
            gameRoot.specialMoves.removePromo([aiStart, aiDest]);
            dispatch({type: 'begin-promo'})
        } else {
            finishMove(aiStart, aiDest);
        }
    };

    /**
     * end of the move cycles and starts triggers next one, either the event listener of AI making its move
     * @param start
     * @param dest
     */
    const finishMove = (start, dest) => {
        gameRoot.turn = (gameRoot.turn === 'W') ? 'B' : 'W';
        gameRoot.unsavedProgress = true;
        gameRoot.updateFen(start, dest);
        gameRoot.updateTurnData();
        gameRoot.triggerRender();
    };

    return (
        <>
            <div ref={drop} className={classes.board}>
                {Object.keys(state.pieces).map((key) =>
                    renderPiece(state.pieces[key], key, sqrSize, state.hiddenPiece)
                )}
            </div>
            {state.isPromo ? (
                <Portal>
                    <Promo
                        board={gameRoot.board}
                        color={gameRoot.turn}
                        idDict={gameRoot.idDict}
                        pieceDefs={gameRoot.defs}
                        aiColor={gameRoot.aiColor}
                        isCouncil={gameRoot.isCouncil}
                        jsonRecords={gameRoot.jsonRecords}
                        promoChoices={gameRoot.promoChoices}
                        triggerRender={gameRoot.triggerRender}
                        updateTurnData={gameRoot.updateTurnData}
                        promoStart={gameRoot.specialMoves.promoStart}
                        promoDest={gameRoot.specialMoves.promoDest}
                        theme={gameRoot.state.theme}
                        finishMove={finishMove}
                        piecesDispatch={dispatch}
                    />
                </Portal>
            ) : null}
            {state.aiDisplay ? (
                <AIMove
                    aiMoveComponent={aiMoveComponent}
                    piece={state.pieces[gameRoot.board[gameRoot.aiStart]]}
                    parentDispatch={dispatch}
                    aiStart={gameRoot.aiStart}
                    aiDest={gameRoot.aiDest}
                    sqrSize={sqrSize}
                    boardSize={boardSize}
                    theme={gameRoot.state.theme}
                />
            ) : null}
        </>
    );
};

export default DropLayer;
