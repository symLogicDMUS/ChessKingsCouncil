import { isPiece } from "../../helpers/isPiece";

export function ply(data, start, dest) {
    /*move piece to new square, capturing piece there if there is**/
    if (isPiece(data.board[dest])) {
        data.captured = data.board[dest]
    }
    else {
        data.captured = 'None'
    }
    data.board[dest] = data.board[start]
    data.board[start] = '#'
    data.updateFrontend(start, dest)
}