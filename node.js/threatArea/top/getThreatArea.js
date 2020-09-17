var  getPathThreats  = require("../getPathThreats");
var  getOffsetThreats  = require("../getOffsetThreats");
var  getPawnThreats  = require("../getPawnThreats");
const mapListXyToRf = require("../../coordType/mapListXyToRf");


function getThreatArea(board, sqr, color, pieceDefs, idDict) {
    /* **/
    var threatArea = [];
    var pathThreats, offsetThreats, pawnThreats;
    pathThreats = getPathThreats(board, sqr, color, pieceDefs, idDict)
    offsetThreats = getOffsetThreats(board, sqr, color, pieceDefs, idDict)
    pawnThreats = getPawnThreats(board, sqr, color)
    threatArea.push(...pathThreats)
    threatArea.push(...offsetThreats)
    threatArea.push(...pawnThreats)
    return threatArea
}

module.exports = getThreatArea;

if (require.main === module) {

    const  getStandardPieceDefs  = require("../../testObjects/getStandardPieceDefs");
    const  getStandardIdDict  = require("../../testObjects/getStandardIdDict");
    const  sampleBoardDicts  = require("../../testObjects/sampleBoardDicts");
    const  printBoard  = require("../../printers/printBoard");

    var pieceDefs, idDict, board, threatArea;
    pieceDefs = getStandardPieceDefs()
    idDict = getStandardIdDict()

    board = sampleBoardDicts['super_checkmate_impossible_example'];
    threatArea = getThreatArea(board, [6, 6], 'W', pieceDefs, idDict)
    printBoard(board, "\nsuper_checkmate_impossible_example", mapListXyToRf(threatArea), ["f6"])
    console.log(threatArea)

    board = sampleBoardDicts['knight_threat2'];
    threatArea = getThreatArea(board, [5, 1], 'W', pieceDefs, idDict)
    printBoard(board, "\nknight_threat2", mapListXyToRf(threatArea), highlights3=["e1"])
    console.log(threatArea)

    board = sampleBoardDicts['check_example3'];
    threatArea = getThreatArea(board, [4, 4], 'W', pieceDefs, idDict)
    printBoard(board, "\ncheck_example3", mapListXyToRf(threatArea), highlights3=["d4"])
    console.log(threatArea)
}