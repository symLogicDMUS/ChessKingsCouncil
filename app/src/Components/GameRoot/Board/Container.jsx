import React, {useReducer} from "react";
import {useDrop} from "react-dnd";
import {move} from "../Move/move";
import {isLegal} from "../Move/isLegal";
import {styles} from "./Container.jss";
import {ItemTypes} from "./ItemTypes";
import {reducer} from "./reducer";
import {getCoords} from "./getCoords";
import {renderPiece} from "./renderPiece.js";
import {GameDisplayBoard2} from "./GameDisplayBoard2";
import {getStartingPieces} from "./getStartingPieces";

export const Container = ({ snapToGrid, gameroot }) => {
    const [pieces, dispatch] = useReducer(reducer, getStartingPieces(gameroot));

    const [, drop] = useDrop({
        accept: ItemTypes,
        canDrop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta);
            if (isLegal(gameroot, item, start, dest)) {
                return true
            }
            else {
                return false;
            }
        },
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            let [start, dest, left, top] = getCoords(item, delta);
            move(gameroot, item.id, start, dest, left, top, pieces[item.id].src, dispatch)
            return undefined;
        },
    });

    return (
        <>
            <div ref={drop} style={styles}>
                {Object.keys(pieces).map((key) => renderPiece(pieces[key], key))}
            </div>
            <GameDisplayBoard2 theme="dark" />
        </>
    );
};