import {pieceDefs} from "../testObjects/standardPieceDefs";
import {getPiecesOnPath} from "../pathsInfo/getPiecesOnPath";

export function getPieceLocsOnPath (board, coordPath) {
    let pieceLocs = []
    for (var rf of coordPath) {
        if (board[rf] !== '#')
            pieceLocs.push(rf)
    }
    return pieceLocs;
}

// module.exports = getPieceLocsOnPath;