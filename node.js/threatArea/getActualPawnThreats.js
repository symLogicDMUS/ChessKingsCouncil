const  sampleBoardDicts  = require("../testObjects/sampleBoardDicts");
const  getSqrCase  = require("../sqrCase/getSqrCase");
const  getPieceType  = require("../pieceType/getPieceType");
const  printBoard  = require("../printers/printBoard");
const  {xyToRf} = require("../coordType/crdCnvrt");
const  {ENEMY}  = require("../sqrCase/sqrCases");
const mapListXyToRf = require("../coordType/mapListXyToRf");


function getActualPawnThreats(board, potentialPawnThreats, color) {
    /*filter the list of potential pawn threats to get list of actual pawn threats**/
    var potentialPawnThreats =  potentialPawnThreats.filter(sqr => getSqrCase(board, ...sqr, color) === ENEMY && getPieceType(board[xyToRf(...sqr)]) === 'P')
    return potentialPawnThreats;
}

module.exports = getActualPawnThreats;

if (require.main === module) {

    let board = sampleBoardDicts['pawn_threat1']

    printBoard(board, "\nwhite", mapListXyToRf(getActualPawnThreats(board, [[5, 4], [7, 4]], 'W'),  ["f3"]))
    printBoard(board, "\nblack", mapListXyToRf(getActualPawnThreats(board, [[2, 4], [4, 4]], 'B')), ["c5"])
}