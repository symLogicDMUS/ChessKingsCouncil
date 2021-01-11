import {DraggablePiece} from "./DraggablePiece";
import React from "react";

export function renderPiece(item, key) {
    return <DraggablePiece key={key} id={key} {...item} />;
}