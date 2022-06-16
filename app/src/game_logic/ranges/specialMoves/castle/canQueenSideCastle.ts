import { getQueenSideCastlePaths } from "./getQueenSideCastlePaths";
import { kingStartPos } from "./kingStartPos";
import { safePath } from "./safePath";
import { sqrUnderAttack } from "../../../threatArea/top/sqrUnderAttack";
import { clearPath } from "../../../bools/clearPath";
import { rfToXy } from "../../../coordType/crdCnvrt";

export function canQueenSideCastle(
    board,
    color,
    jsonRecords,
    pieceDefs,
    idDict
) {
    /*return true if the queen side castle of the given color can be performed, else false**/

    if (jsonRecords.hasKingMoved(color)) {
        return false;
    }

    if (jsonRecords.queenSideRookMoved(color)) {
        return false;
    }

    const castlePath = getQueenSideCastlePaths(color);

    if (!clearPath(board, castlePath)) {
        return false;
    }

    if (!safePath(board, castlePath, color, pieceDefs, idDict)) {
        return false;
    }

    return !sqrUnderAttack(
        board,
        rfToXy(kingStartPos[color]),
        color,
        pieceDefs,
        idDict
    );
}

// module.exports = canQueenSideCastle;
