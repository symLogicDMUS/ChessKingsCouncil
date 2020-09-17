var  getSqrCase  = require("../../sqrCase/getSqrCase");
var  {ENEMY}  = require("../../sqrCase/sqrCases");



function getActualCaptures(board, potentialPawnCaptures, color) {
    /*filter the list of potential pawn captures to get actual ones**/
    return potentialPawnCaptures.filter(sqr => getSqrCase(board, ...sqr, color) === ENEMY)
}

module.exports = getActualCaptures;

if (require.main === module) {
    
    const sampleBoardDicts = require("../../testObjects/sampleBoardDicts");
    const mapListXyToRf = require("../../coordType/mapListXyToRf")
    const printBoard = require("../../printers/printBoard");

    var board = sampleBoardDicts["pawn_range"]
    
    // test 1, b4 pawn:
    let actualPawnCaptures = getActualCaptures(board, [[3, 5], [1, 5]], 'W')
    printBoard(board, '\ntest 1, b4 pawn', mapListXyToRf(actualPawnCaptures), null, ["b4"])
    console.log('\n');
}