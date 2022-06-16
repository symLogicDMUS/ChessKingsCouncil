import { xyToRf } from "../../coordType/crdCnvrt";
import Board from "../../types/Board";
import Coord from "../../types/Coord";

export function initBoard(): Board {
    /**fenParser task 6, get an empty board before we know where the pieces are*/
    let board = {};
    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            board[xyToRf(x as Coord, y as Coord)] = "#";
        }
    }
    return board as Board;
}

// module.exports = initBoard;

/** for node.js
if (require.main === module) {
    console.log(initBoard())

}
*/
