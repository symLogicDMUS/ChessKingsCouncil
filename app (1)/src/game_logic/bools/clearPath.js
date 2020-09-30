import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
import {isPiece} from "../pieceType/isPiece";
import {getXyBoard} from "../helpers/getXyBoard";
import {xyToRf, rfToXy} from "../coordType/crdCnvrt";
import {printBoard} from "../printers/printBoard";


export function clearPath(board, path) {
    /*return true if every square along the path is empty, else false**/
    for (var rf of path) {
        if (isPiece(board[rf])) {
            return false;
        }
    }

    return true;
}

// module.exports = clearPath;

/** for node.js
if (require.main === module) {

    // test 1:
    console.log('test 1:')
    let board = sampleBoardDicts['checkExample3']
    printBoard(board)
    let xyBoard = getXyBoard()
    for (var col of xyBoard) {
        console.log(clearPath(board, col))
    }
    console.log('\n')


    // test 2:
    console.log('test 2:')
    board = sampleBoardDicts['superCheckmateImpossibleExample'];
    printBoard(board)
    for (var col of xyBoard) {
        console.log(clearPath(board, col))
    }
    console.log('\n');

}
*/