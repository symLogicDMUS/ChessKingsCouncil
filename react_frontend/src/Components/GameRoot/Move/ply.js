import { isPiece } from "../gameRootHelpers/isPiece";

export function ply(gameroot, start, dest) {
    /*move piece to new square, capturing piece there if there is**/
    if (isPiece(gameroot.board[dest])) {
        gameroot.captured = gameroot.board[dest]
    }
    else {
        gameroot.captured = 'None'
    }
    gameroot.board[dest] = gameroot.board[start]
    gameroot.board[start] = '#'
    gameroot.updateJsonRecords(start, dest)
}