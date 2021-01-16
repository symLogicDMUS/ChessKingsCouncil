import React from "react";
import {DraggablePiece} from "./DraggablePiece";

/**
 *
 * @param item: position left position top, and image source,
 * @param setRangeDisplay: highlight squares part of piece's range when drag starts
 * @param key: piece id
 * @param sqrSize
 * @returns {JSX.Element}
 */
export function renderPiece(item, key, sqrSize, setRangeDisplay) {
    return <DraggablePiece key={key} id={key} {...item} sqrSize={sqrSize} setRangeDisplay={setRangeDisplay} />;
}