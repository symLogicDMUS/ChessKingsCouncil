import { isPiece } from "../../helpers/isPiece";
import {getColor} from "../../helpers/getColor";

/**
 * update game-reducers board and record id of captured piece if there was.
 * @param gameRoot
 * @param start: start square rankfile
 * @param dest: destination square rankfile
 */
export function ply(gameRoot, start, dest) {
    if (isPiece(gameRoot.board[dest])) {
        gameRoot.captured = gameRoot.board[dest]
    }
    else {
        gameRoot.captured = 'None';
    }
    gameRoot.board[dest] = gameRoot.board[start]
    gameRoot.board[start] = '#'
}