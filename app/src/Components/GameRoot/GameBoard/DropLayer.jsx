import React, {useEffect, useReducer, useState} from "react";
import {useDrop} from "react-dnd";
import {isLegal} from "../Move/isLegal";
import {move} from "../Move/move";
import {ItemTypes} from "./ItemTypes";
import {getCoords} from "./getCoords";
import {renderPiece} from "./renderPiece.js";
import {useStyles} from "./DropLayer.jss";
import {Portal} from "@material-ui/core";
import Promo from "../Promo/Promo";
import {AIDisplay} from "../AI/AIDisplay";
import {noRanges} from "../../../game_logic/fenParser/GameStatus/noRanges";
import {getAiMove} from "../../../apiHelpers/getAiMove";
import {rfToXy, xyToPx} from "./DndCrdCnvrt";
import {reducer} from "./reducers/DropLayer.red";
import {getStartingPieces} from "./getStartingPieces";
import {OVER} from "../../helpers/gStatusTypes";

/**
 * Sits on top of game boards. updated on drop.
 */
const DropLayer = ({gameRoot, setRangeDisplay, sqrSize, boardSize}) => {
    const [isPromo, setIsPromo] = useState(false);
    const [aiDisplay, setAiDisplay] = useState(false);
    const [pieces, dispatch] = useReducer(
        reducer,
        getStartingPieces(gameRoot, sqrSize)
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
            move(gameRoot, sqrSize, boardSize, item.id, pieces, start, dest, left, top, dispatch);
            if (gameRoot.specialMoves.isPromo([start, dest])) {
                gameRoot.specialMoves.promoStart = start;
                gameRoot.specialMoves.promoDest = dest;
                gameRoot.specialMoves.removePromo([start, dest]);
                setIsPromo(true);
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
                setAiDisplay(true);
            }
        }
    }, [gameRoot.turn]);

    const aiMoveComponent = (aiStart, aiDest, sqrSize) => {
        let [destX, destY] = rfToXy(aiDest);
        let [destLeft, destTop] = xyToPx(destX, destY, sqrSize);
        let pieceId = gameRoot.board[aiStart];
        move(
            gameRoot,
            sqrSize,
            boardSize,
            pieceId,
            pieces,
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
            setIsPromo(true);
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
                {Object.keys(pieces).map((key) =>
                    renderPiece(pieces[key], key, sqrSize, setRangeDisplay)
                )}
            </div>
            {isPromo ? (
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
                        setIsPromo={setIsPromo}
                        finishMove={finishMove}
                        piecesDispatch={dispatch}
                    />
                </Portal>
            ) : null}
            {aiDisplay ? (
                <AIDisplay
                    sqrSize={sqrSize}
                    boardSize={boardSize}
                    theme={gameRoot.state.theme}
                    aiStart={gameRoot.aiStart}
                    aiDest={gameRoot.aiDest}
                    setAiDisplay={setAiDisplay}
                    aiMoveComponent={aiMoveComponent}
                />
            ) : null}
        </>
    );
};

export default DropLayer;
