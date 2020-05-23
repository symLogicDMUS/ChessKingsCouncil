import { isPiece } from "./isPiece";
import { getPieceType } from "./getPieceType"
import { JsonRecords } from "./JsonRecords";

export function ply(chess, start, dest) {
    /*move piece to new square, capturing piece there if there is**/
    if (isPiece(chess.board[dest])) {
        chess.captured = chess.board[dest]
    }
    else {
        chess.captured = 'None'
    }
    chess.board[dest] = chess.board[start]
    chess.board[start] = '#'
    chess.update(start, dest)
}