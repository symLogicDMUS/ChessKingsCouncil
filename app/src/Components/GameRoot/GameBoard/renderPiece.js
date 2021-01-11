import React from "react";
import {DraggablePiece} from "./DraggablePiece";

export function renderPiece(item, key, setRangeDisplay) {
    return <DraggablePiece key={key} id={key} setRangeDisplay={setRangeDisplay} {...item} />;
}