import { isPiece } from "../../helpers/isPiece";

/**
 * update the board used for game logic/determining allowed moves, as well as its special records, to the move performed
 * @param gameRoot
 * @param start
 * @param dest
 */
export function ply(gameRoot, start, dest) {
    /*move piece to new square, capturing piece there if there is**/
    if (isPiece(gameRoot.board[dest])) {
        gameRoot.captured = gameRoot.board[dest]
    }
    else {
        gameRoot.captured = 'None';
    }
    gameRoot.board[dest] = gameRoot.board[start]
    gameRoot.board[start] = '#'
    gameRoot.updateJsonRecords(start, dest)
}