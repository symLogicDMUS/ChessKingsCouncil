import { isPiece } from "../pieceType/isPiece";

export function clearPath(board, path) {
    /*return true if every square along the path is empty, else false**/
    for (const rf of path) {
        if (isPiece(board[rf])) {
            return false;
        }
    }

    return true;
}
