import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
import {getSqrCase} from "../sqrCase/getSqrCase";
import {getPieceType} from "../pieceType/getPieceType";
import {printBoard} from "../printers/printBoard";
import {xyToRf} from "../coordType/crdCnvrt";
import {ENEMY} from "../sqrCase/sqrCases";
import {mapListXyToRf} from "../coordType/mapListXyToRf";


export function getActualPawnThreats(board, potentialPawnThreats, color) {
    /*filter the list of potential pawn threats to get list of actual pawn threats**/
    var potentialPawnThreats =  potentialPawnThreats.filter(sqr => getSqrCase(board, ...sqr, color) === ENEMY && getPieceType(board[xyToRf(...sqr)]) === 'P')
    return potentialPawnThreats;
}

// module.exports = getActualPawnThreats;

/** for node.js
if (require.main === module) {

    let board = sampleBoardDicts['pawn_threat1']

    printBoard(board, "\nwhite", mapListXyToRf(getActualPawnThreats(board, [[5, 4], [7, 4]], 'W'),  ["f3"]))
    printBoard(board, "\nblack", mapListXyToRf(getActualPawnThreats(board, [[2, 4], [4, 4]], 'B')), ["c5"])

}
*/