import {xyToRf} from "../../coordType/crdCnvrt";


export function initBoard() {
    /**fenParser task 6, get an empty board before we know where the pieces are*/
    let board = {}
    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            board[xyToRf(x, y)] = '#';
        }        
    }
    return board;
}

// module.exports = initBoard;

/** for node.js
if (require.main === module) {
    console.log(initBoard())

}
*/