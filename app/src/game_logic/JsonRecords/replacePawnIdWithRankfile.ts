import { getPieceLoc } from "../helpers/getPieceLoc";
import Ranges from "../types/Ranges";
import Board from "../types/Board";

export function replacePawnIdWithRankfile(board: Board, pawnRanges: Ranges) {
    /**replace the key of the pawn ranges from id of pawn to rf of its location */
    let rf;
    const pawnRangesRfKey = {};
    for (const id of Object.keys(pawnRanges)) {
        rf = getPieceLoc(board, id);
        pawnRangesRfKey[rf] = pawnRanges[id];
    }
    return pawnRangesRfKey;
}
