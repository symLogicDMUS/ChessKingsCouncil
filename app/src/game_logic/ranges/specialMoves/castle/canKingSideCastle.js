import {getKingSideCastlePaths} from "./getKingSideCastlePaths";
import {safePath} from "./safePath";
import {clearPath} from "../../../bools/clearPath";


export function canKingSideCastle(board, color, jsonRecords, pieceDefs, idDict) {
    /*return true if the king side castle of the given color can be performed, else false**/
    if (jsonRecords.hasKingMoved(color)) {
        return false
    }

    if (jsonRecords.kingSideRookMoved(color)) {
        return false
    }

    let castlePath = getKingSideCastlePaths(color)

    if (! clearPath(board, castlePath)) {
        return false
    }

    return safePath(board, castlePath, color, pieceDefs, idDict);


}

// module.exports = canKingSideCastle;