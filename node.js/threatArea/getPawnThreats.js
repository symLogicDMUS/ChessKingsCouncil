var  getPotentialPawnThreats  = require("./getPotentialPawnThreats");
var  getActualPawnThreats  = require("./getActualPawnThreats");
var  sampleBoardDicts  = require("../testObjects/sampleBoardDicts");
const mapListRfToXy = require("../coordType/mapListRfToXy");



function getPawnThreats(board, sqr, color) {
    /*return list of squares containing a pawn putting the check.includes(king)**/
    var potentialPawnThreats = getPotentialPawnThreats(board, sqr, color)
    var actualPawnThreats = getActualPawnThreats(board, mapListRfToXy(potentialPawnThreats), color)
    return actualPawnThreats
}

module.exports = getPawnThreats;

if (require.main === module) {

    const printBoard = require("../printers/printBoard");
    const mapListXyToRf = require("../coordType/mapListXyToRf");
    
    var board = sampleBoardDicts['pawn_threat1'];

    mapListXyToRf(getPawnThreats(board, [6, 3], 'W'))
    mapListXyToRf(getPawnThreats(board, [3, 5], 'B'))
}