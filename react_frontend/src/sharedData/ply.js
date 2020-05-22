import { isPiece } from "./isPiece";

export function ply(board, start, dest) {
    /*move piece to new square, capturing piece there if there is**/
    let captured = "-"
    if (isPiece(board[dest])) {
        captured = board[dest]
    }
    else {
        captured = 'None'
    }
    board[dest] = board[start]
    board[start] = '#'
    return [board, captured]
}