import { outOfBounds } from "./oob";
import SqrCase from "../../game_logic/types/SqrCase";

export function getSqrCase(board, rf, color) {
    /*get the case of square at location x, y on the board. see sqrTypes.py**/
    if (outOfBounds(rf)) {
        return SqrCase.OOB;
    } else if (board[rf] === "#") {
        return SqrCase.EMPTY;
    } else if (board[rf][0] === color) {
        return SqrCase.FRIEND;
    } else {
        return SqrCase.ENEMY;
    }
}
