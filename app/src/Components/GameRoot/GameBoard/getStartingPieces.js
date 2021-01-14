import {getPieceObj} from "./getPieceObj";
import {sqrSize} from "../../Reuseables/Board.jss";

export function getStartingPieces(gameRoot) {
    let posAndIdsOfPieces = Object.entries(gameRoot.board).filter(([rf, id]) => id !== '#' );
    const pieces = {}
    for (let posAndId of posAndIdsOfPieces) {
        pieces[posAndId[1]] = getPieceObj(gameRoot, posAndId, sqrSize)
    }
    return pieces;
}