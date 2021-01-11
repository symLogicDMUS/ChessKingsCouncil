import {sqrSize} from "./snapToGrid";
import {getPieceObj} from "./getPieceObj";

export function getStartingPieces(gameroot) {
    const board = gameroot.getBoard()
    let posAndIdsOfPieces = Object.entries(board).filter(([rf, id]) => id !== '#' );
    const pieces = {}
    for (let posAndId of posAndIdsOfPieces) {
        pieces[posAndId[1]] = getPieceObj(gameroot, posAndId, sqrSize)
    }
    return pieces;
}