import {xyToRf} from "../coordType/crdCnvrt";
import {ply} from "../helpers/ply";


export function getHypoBoard(board, start, dest) {
    /**get a temporary board where a move from start to dest has taken place. used to evaluate the would-be for that
        scenenario
    */
    var tempBoard, captured;
    tempBoard = JSON.parse(JSON.stringify(board));
    [tempBoard, captured] = ply(tempBoard, start, dest);
    return tempBoard;
}

// module.exports = getHypoBoard;

/** for node.js
if (require.main === module) {
    
    import {printBoard} from "../printers/printBoard";
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";

    var board = sampleBoardDicts['king_range_test']


    printBoard(board, 'before', xyToRf(5, 4), null, xyToRf(4, 3))
    board = getHypoBoard(board, [4, 3], [5, 4])
    printBoard(board, 'after', xyToRf(5, 4))

}
*/