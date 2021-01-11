import React, {useEffect, useReducer} from "react";
import {useDrop} from "react-dnd";
import {move} from "../Move/move";
import {isLegal} from "../Move/isLegal";
import {ItemTypes} from "./ItemTypes";
import {getCoords} from "./getCoords";
import {reducer} from "./reducers/DropLayer";
import {renderPiece} from "./renderPiece.js";
import {GameDisplayBoard} from "./GameDisplayBoard";
import {getStartingPieces} from "./getStartingPieces";
import { useStyles } from "./DropLayer.jss";

/**
 * Sits on top of game boards. updated on drop.
 */
export const DropLayer = ({ gameroot, setRangeDisplay }) => {
    const [pieces, dispatch] = useReducer(reducer, getStartingPieces(gameroot));

    const classes = useStyles();

    const [, drop] = useDrop({
        accept: ItemTypes,
        canDrop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta);
            return isLegal(gameroot, item, start, dest);
        },
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta);
            move(gameroot, item.id, start, dest, left, top, pieces[item.id].src, dispatch)
            gameroot.toggleTurn();
            gameroot.updateFen(start, dest);
            gameroot.updateTurnData();
            gameroot.setUnsavedProgress(true);
            if (gameroot.aiColor === gameroot.turn) {
                gameroot.prepareAiMove();
            }
            // setRangeDisplay(false)
            // gameroot.triggerRender();
            return undefined;
        },
    });

    return (
        <>
            <div ref={drop} className={classes.board} >
                {Object.keys(pieces).map((key) => renderPiece(pieces[key], key, setRangeDisplay))}
            </div>
        </>
    );
};