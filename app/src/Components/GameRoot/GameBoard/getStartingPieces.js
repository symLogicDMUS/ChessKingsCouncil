import {getPieceObj} from "./getPieceObj";

export function getStartingPieces(gameRoot, sqrSize) {
    let posAndIdsOfPieces = Object.entries(gameRoot.board).filter(([rf, id]) => id !== '#' );
    const pieces = {}
    for (let posAndId of posAndIdsOfPieces) {
        pieces[posAndId[1]] = getPieceObj(gameRoot, posAndId, sqrSize)
    }
    return pieces;
}