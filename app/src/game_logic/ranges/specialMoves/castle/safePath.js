import {sqrUnderAttack} from "../../../threatArea/top/sqrUnderAttack";
import {getXyBoard} from "../../../helpers/getXyBoard";
import {pieceDefs} from "../../../testObjects/standardPieceDefs";
import { xyToRf, rfToXy } from "../../../coordType/crdCnvrt";
import {sampleBoardDicts} from "../../../testObjects/sampleBoardDicts";
import { castleTest2 } from "../../../testObjects/sampleBoardDicts";


export function safePath(board, path, color, pieceDefs, idDict) {
    /* return true if every square on path is ! under attack, else return false**/
    
    for (var rf of path) {
        if (sqrUnderAttack(board, rfToXy(rf), color, pieceDefs, idDict)) {
            return false
        }
    }
    
    return true
}

// module.exports = safePath;

/** for node.js
if (require.main === module) {

    let xyBoard = getXyBoard();

    // test 1:
    console.log('test 1:')
    var board = sampleBoardDicts["castleTest1"] 
    for (var col of xyBoard) {
            console.log(safePath(board, col, 'W', pieceDefs, idDict))
    }
    
    // test 2:
    console.log('test 2:')
    board = sampleBoardDicts["castleTest2"];
    for (var col of xyBoard) {
        console.log(safePath(board, col, 'W', pieceDefs, idDict))
    }

}
*/