import { getOffsetThreats } from "../threatArea/getOffsetThreats";
import { getPawnThreats } from "../threatArea/getPawnThreats";
import { getNumPathAttackers } from "../pathsInfo/top/getNumPathAttackers";

export function getNumPiecesCheckingKing(
    board,
    sqr,
    color,
    pdDict,
    pieceDefs,
    idDict
) {
    /*get the number of pieces checking the king of current turn**/
    let offsetThreats = getOffsetThreats(board, sqr, color, pieceDefs, idDict);
    let pawnThreats = getPawnThreats(board, sqr, color);
    let numPathAttackers = getNumPathAttackers(pdDict);
    return offsetThreats.length + pawnThreats.length + numPathAttackers;
}

// module.exports = getNumPiecesCheckingKing;
