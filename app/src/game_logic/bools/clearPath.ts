import { isPiece } from "../pieceType/isPiece";
import Board from "../types/Board";
import Rankfile from "../types/Rankfile";

export function clearPath(board: Board, path: Rankfile []): boolean {
    /*return true if every square along the path is empty, else false**/
    for (const rf of path) {
        if (isPiece(board[rf])) {
            return false;
        }
    }
    return true;
}
