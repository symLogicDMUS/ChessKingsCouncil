import { isPiece } from "../pieceType/isPiece";
import Board from "../types/Board";
import Rankfile from "../types/Rankfile";

export function aiPly(responseBoard: Board, start: Rankfile, dest: Rankfile) {
    /**NOTE: start and dest now in rankfile form */
    let captured = null;
    if (start === dest) return [responseBoard, null];
    if (isPiece(responseBoard[dest])) captured = responseBoard[dest];
    else captured = null;
    responseBoard[dest] = responseBoard[start]; // removed: xyToRf(...start)
    responseBoard[start] = "#";
    return [responseBoard, captured];
}

// module.exports = ply;
