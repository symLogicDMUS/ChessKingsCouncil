import React from "react";
import { DraggablePiece } from "./DraggablePiece";

/**
 *
 * @param item: position left position top, and image source,
 * @param key: piece id
 * @param sqrSize
 * @param hiddenPiece: used for ai move. hide dnd version of piece during animation then display again when finished
 * @returns {JSX.Element}
 */
export function renderPiece(item, key, sqrSize, hiddenPiece) {
    return (
        <DraggablePiece
            key={key}
            id={key}
            {...item}
            sqrSize={sqrSize}
            isHidden={hiddenPiece === key}
        />
    );
}
