const  getSqrCase  = require("../../sqrCase/getSqrCase");
const  {OOB, FRIEND}  = require("../../sqrCase/sqrCases");
const  {dist}  = require("../../helpers/formulas");
const  printBoard  = require("../../printers/printBoard");
const  sampleBoardDicts  = require("../../testObjects/sampleBoardDicts");
const mapListRfToXy = require("../../coordType/mapListRfToXy")
const mapListXyToRf = require("../../coordType/mapListXyToRf")
const { rfToXy } = require("../../coordType/crdCnvrt");


function getKingInitialMoves(board, sqr, color) {
    /*get every initial 'king' move (one square away from sqr)**/
    var initMoves = Object.keys(board).filter(sqr2 => dist(sqr, rfToXy(sqr2)) === Math.sqrt(2) || dist(sqr, rfToXy(sqr2)) === 1)
    initMoves = initMoves.filter(rf => {
        var sqr = rfToXy(rf)
        return getSqrCase(board, ...sqr, color) !== OOB;
    })
    initMoves = initMoves.filter(rf => {
        var sqr = rfToXy(rf)
        return getSqrCase(board, ...sqr, color) !== FRIEND;
    })
    return mapListRfToXy(initMoves)
}

module.exports = getKingInitialMoves;

if (require.main === module) {

    let board = sampleBoardDicts['super_checkmate_impossible_example']
    initMoves = getKingInitialMoves(board, [6, 6], 'W')
    printBoard(board, heading='super_checkmate_impossible_example', mapListXyToRf(initMoves))


    board = sampleBoardDicts['king_range_test']
    initMoves = getKingInitialMoves(board, [4, 3], 'W')
    printBoard(board, heading='\nking_range_test, white', mapListXyToRf(initMoves))

}