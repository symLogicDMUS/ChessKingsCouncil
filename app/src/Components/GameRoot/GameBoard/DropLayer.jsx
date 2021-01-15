import React, { useEffect, useState } from "react";
import MediaQuery from "react-responsive/src";
import { useDrop } from "react-dnd";
import { isLegal } from "../Move/isLegal";
import { move } from "../Move/move";
import { ItemTypes } from "./ItemTypes";
import { getCoords } from "./getCoords";
import { renderPiece } from "./renderPiece.js";
import { useStyles } from "./DropLayer.jss";
import { Portal } from "@material-ui/core";
import Promo from "../Promo/Promo";
import { AIDisplay } from "../AI/AIDisplay";
import { noRanges } from "../../../game_logic/fenParser/GameStatus/noRanges";
import { getAiMove } from "../../../apiHelpers/getAiMove";
import { rfToXy, xyToPx } from "./DndCrdCnvrt";
import { sqrSize } from "../../Reuseables/Board.jss";

/**
 * Sits on top of game boards. updated on drop.
 */
export const DropLayer = ({ gameRoot, pieces, dispatch, setRangeDisplay }) => {
    const [isPromo, setIsPromo] = useState(false);
    const [aiDisplay, setAiDisplay] = useState(false);

    const classes = useStyles();

    const [, drop] = useDrop({
        accept: ItemTypes,
        canDrop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta);
            return isLegal(gameRoot, item, start, dest);
        },
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta);
            move(gameRoot, item.id, pieces, start, dest, left, top, dispatch);
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
        gameRoot.updateTurnData();
        if (gameRoot.aiColor === gameRoot.turn) {
            if (!noRanges(gameRoot.ranges)) {
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
            }
            setAiDisplay(true);
        }
    }, [gameRoot.turn]);

    const aiMoveComponent = (aiStart, aiDest) => {
        let [destX, destY] = rfToXy(aiDest);
        let [destLeft, destTop] = xyToPx(destX, destY, sqrSize);
        let pieceId = gameRoot.board[aiStart];
        move(
            gameRoot,
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

    const finishMove = (start, dest) => {
        gameRoot.updateFen(start, dest);
        gameRoot.unsavedProgress = true;
        gameRoot.toggleTurn();
    };

    return (
        <>
            <div ref={drop} className={classes.board}>
                {Object.keys(pieces).map((key) =>
                    renderPiece(pieces[key], key, setRangeDisplay)
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
