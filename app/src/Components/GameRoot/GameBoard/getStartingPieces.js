import {getPieceObj} from "./getPieceObj";
import {sqrSize} from "../../Reuseables/Board.jss";

export function getStartingPieces(gameroot) {
    let posAndIdsOfPieces = Object.entries(gameroot.board).filter(([rf, id]) => id !== '#' );
    const pieces = {}
    for (let posAndId of posAndIdsOfPieces) {
        pieces[posAndId[1]] = getPieceObj(gameroot, posAndId, sqrSize)
    }
    return pieces;
}