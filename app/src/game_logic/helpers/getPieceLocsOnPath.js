import {pieceDefs} from "../testObjects/standardPieceDefs";
import {getPiecesOnPath} from "../pathsInfo/getPiecesOnPath";

export function getPieceLocsOnPath (board, coordPath) {
    let pieceLocs = []
    for (const rf of coordPath) {
        if (board[rf] !== '#')
            pieceLocs.push(rf)
    }
    return pieceLocs;
}

// module.exports = getPieceLocsOnPath;