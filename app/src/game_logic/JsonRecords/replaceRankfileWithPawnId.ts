import Board from "../types/Board";
import Rankfile from "../types/Rankfile";

export function replaceRankfileWithPawnId(board: Board, pawnHist: Rankfile []) {
    let id;
    const newPawnHist = {};
    for (const rf of Object.keys(pawnHist)) {
        id = board[rf];
        newPawnHist[id] = pawnHist[rf];
    }
    return newPawnHist;
}