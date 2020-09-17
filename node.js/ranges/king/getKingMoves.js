var  getSqrCase  = require("../../sqrCase/getSqrCase");
var  sqrUnderAttack  = require("../../threatArea/top/sqrUnderAttack");
var  dist  = require("../../helpers/formulas");
var  sqrCases  = require("../../sqrCase/sqrCases");
var  printBoard  = require("../../printers/printBoard");
var  sampleBoardDicts  = require("../../testObjects/sampleBoardDicts");
var  getStandardPieceDefs  = require("../../testObjects/getStandardPieceDefs");
var  getStandardIdDict  = require("../../testObjects/getStandardIdDict");
const getKingSafeMoves = require("./getKingSafeMoves");
const { FRIEND } = require("../../sqrCase/sqrCases");


function getKingMoves(board, sqr, color, rangefunctions, idDict) {
    /*get every 1 king distance away that is ! out of bounds || a friendly piece**/
    let kingMoves = Object.keys(board).filter(sqr2 => dist(sqr, sqr2) === sqrt(2) || dist(sqr, sqr2) === 1)
    kingMoves = kingMoves.filter(sqr => getSqrCase(board, ...sqr, color) != OOB)
    kingMoves = kingMoves.filter(sqr => getSqrCase(board, ...sqr, color) != FRIEND)
    kingMoves = kingMoves.filter(sqr => ! sqrUnderAttack(board, sqr, color, rangefunctions, idDict))
    return kingMoves
}

module.exports = getKingSafeMoves;

if (require.main === module) {
    let rangeDefs = getStandardPieceDefs()
    let idDict = getStandardIdDict()
    let board = sampleBoardDicts['king_range_test']
    kingMoves = getKingMoves(board, [4, 3], 'W', rangeDefs, idDict)
    printBoard(board, heading="test 1, white", highlights=kingMoves)
    kingMoves = getKingMoves(board, [5, 8], 'B', rangeDefs, idDict)
}
    printBoard(board, heading='test 2, black', highlights=kingMoves)
