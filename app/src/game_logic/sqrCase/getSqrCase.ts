import { outOfBounds } from "./oob";
import { xyToRf } from "../coordType/crdCnvrt";
import SqrCase from "../types/SqrCase";
import Board from "../types/Board";
import Coord from "../types/Coord";
import Color from '../types/Color';

export function getSqrCase(board: Board, x: Coord, y: Coord, color: Color): SqrCase {
    /*get the case of square at location x, y on the board. see sqrTypes.py**/
    if (outOfBounds(x, y)) {
        return SqrCase.OOB;
    } else if (board[xyToRf(x, y)] === "#") {
        return SqrCase.EMPTY;
    } else if (board[xyToRf(x, y)][0] === color) {
        return SqrCase.FRIEND;
    }
    return SqrCase.ENEMY;
}

// module.exports = getSqrCase;

/** for node.js
if (require.main === module) {
    
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";

    var board = sampleBoardDicts["ranges_test"];
    console.log(getSqrCase(board, 3, 9, "W") === OOB);
    console.log(getSqrCase(board, 4, 4, "W") === EMPTY);
    console.log(getSqrCase(board, 3, 3, "W") === FRIEND);
    console.log(getSqrCase(board, 4, 5, "W") === ENEMY);

}
*/
