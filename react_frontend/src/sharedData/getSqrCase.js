import { outOfBounds } from "./oob";
import { OOB, EMPTY, FRIEND, ENEMY } from "./sqrCases";
export function getSqrCase(board, rf, color) {
    /*get the case of square at location x, y on the board. see sqrTypes.py**/
    if (outOfBounds(rf)) {
        return OOB
    }
    else if (board[rf] === '#') {
        return EMPTY
    }
    else if (board[rf][0] === color) {
        return FRIEND
    }
    else {
        return ENEMY
    }
}