const  getPathdataDict  = require("../pathsInfo/top/getpathDataDict");
const  getIndexFirstPiece  = require("../pathsInfo/getIndexFirstPiece");
const  getStandardPieceDefs  = require("../testObjects/getStandardPieceDefs");
const  getStandardIdDict  = require("../testObjects/getStandardIdDict");


function getPathThreats(board, sqr, color, pieceDefs, idDict) {
    /*get all squares that are path threats to sqr**/
    var pathDict, pathThreats;
    pathDict = getPathdataDict(board, sqr, color, pieceDefs, idDict)
    pathThreats = []
    for (var direction of Object.keys(pathDict)) {
        if (pathDict[direction].pieces.length === 0) {
            continue
        }
        if (pathDict[direction].statuses[0] != 'e') {
            continue
        }
        if (! pathDict[direction].pieceMatchesPath[0]) {
            continue
        }
        let i = getIndexFirstPiece(pathDict[direction].path)
        pathThreats.push(...pathDict[direction].coordPath.slice(0, i + 1))
    }
    return pathThreats
}

module.exports = getPathThreats;

if (require.main === module) {

    const convertOffsetStrsToPairs = require("../apiHelpers/convertOffsetStrsToPairs");
    const printBoard = require("../printers/printBoard");
    const  sampleBoardDicts = require("../testObjects/sampleBoardDicts");
    const mapListXyToRf = require("../coordType/mapListXyToRf");

    pieceDefs = getStandardPieceDefs()
    pieceDefs = convertOffsetStrsToPairs(pieceDefs)
    idDict = getStandardIdDict()
    
    var board = sampleBoardDicts["super_checkmate_impossible_example"];
    printBoard(board, "\ntest1", mapListXyToRf(getPathThreats(board, [6, 6], 'W', pieceDefs, idDict), null, ["f6"]))

}