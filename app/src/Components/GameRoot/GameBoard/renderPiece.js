import React from "react";
import {DraggablePiece} from "./DraggablePiece";

/**
 *
 * @param item: position left position top, and image source,
 * @param key: piece id
 * @param setRangeDisplay: highlight squares part of piece's range when drag starts
 * @returns {JSX.Element}
 */
export function renderPiece(item, key, setRangeDisplay) {
    return <DraggablePiece key={key} id={key} {...item} setRangeDisplay={setRangeDisplay} />;
}