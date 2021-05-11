import {getPieceObj} from "./getPieceObj";

export function setStartingPieces(gameRoot, sqrSize) {
    let posAndIdsOfPieces = Object.entries(gameRoot.board).filter(([rf, id]) => id !== '#' );
    const pieces = {}
    let pos, id;
    for (let posAndId of posAndIdsOfPieces) {
        pos = posAndId[0];
        id = posAndId[1];
        pieces[id] = getPieceObj(gameRoot, pos, id, sqrSize)
    }
    return pieces;
}