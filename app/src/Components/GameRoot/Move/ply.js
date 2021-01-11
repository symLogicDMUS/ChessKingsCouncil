import { isPiece } from "../../helpers/isPiece";

/**
 * update the board used for game logic/determining allowed moves, as well as its special records, to the move performed
 * @param gameroot
 * @param start
 * @param dest
 */
export function ply(gameroot, start, dest) {
    /*move piece to new square, capturing piece there if there is**/
    if (isPiece(gameroot.board[dest])) {
        gameroot.captured = gameroot.board[dest]
    }
    else {
        gameroot.captured = 'None';
    }
    gameroot.board[dest] = gameroot.board[start]
    gameroot.board[start] = '#'
    gameroot.updateJsonRecords(start, dest)
}