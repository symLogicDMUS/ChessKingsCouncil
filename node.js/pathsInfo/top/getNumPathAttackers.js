var  getPathdataDict  = require("./getpathDataDict");
var  sampleBoardDicts  = require("../../testObjects/sampleBoardDicts");


function getNumPathAttackers(pdDict) {
    /*get the number of Rooks, Bishops, || Queens, that are attacking the King**/
    var numPathAttackers = 0;
    for (var direction of Object.keys(pdDict)) {
        if (pdDict[direction].pieces.length === 0) {
            continue
        }
        if (pdDict[direction].statuses[0] !== 'e') {
            continue
        }
        if (! pdDict[direction].pieceMatchesPath[0]) {
            continue
        }
        numPathAttackers += 1;
    }
    return numPathAttackers;
}

module.exports = getNumPathAttackers;

if (require.main === module) {

    const printBoard = require("../../printers/printBoard");
    const getStandardPieceDefs = require("../../testObjects/getStandardPieceDefs");
    const getStandardIdDict = require("../../testObjects/getStandardIdDict");

    var idDict = getStandardIdDict()
    var pieceDefs = getStandardPieceDefs()

    var board = sampleBoardDicts['check_example3']
    var pathdataDict = getPathdataDict(board, [4,4], 'W', pieceDefs, idDict)
    printBoard(board, `\ntest 1 ${getNumPathAttackers(pathdataDict)}`, null, null, ["d4"])
    console.log()
    console.log('\n')

    board = sampleBoardDicts['super_checkmate_impossible_example']
    pathdataDict = getPathdataDict(board, [6,6], 'W', pieceDefs, idDict)
    printBoard(board, `\n test 2 ${getNumPathAttackers(pathdataDict)}`, null, null, ["f6"])
    console.log('\n')
}