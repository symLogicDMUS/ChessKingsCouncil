import {getPieceLoc} from "../helpers/getPieceLoc";


export function replacePawnIdWithRankfile(board, pawnRanges) {
    /**replace the key of the pawn ranges from id of pawn to rf of its location */
    var rf;
    var pawnRangesRfKey = {}
    for (var id of Object.keys(pawnRanges)) {
        rf = getPieceLoc(board, id);
        pawnRangesRfKey[rf] = pawnRanges[id]
    }
    return pawnRangesRfKey;
}

// module.exports = replacePawnIdWithRankfile;