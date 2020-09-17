const mapListXyToRf = require("../coordType/mapListXyToRf")
const printBoard = require("../printers/printBoard")


function isPin(pathData) {
    /**return true if the path contains a pinned piece, otherwise false 
        see class PathData
    */
    if (pathData.statuses.length < 2) {
        return false
    }
    if (pathData.statuses[0] != 'f') {
        return false
    }
    if (pathData.statuses[1] != 'e') {
        return false
    }
    if (! pathData.pieceMatchesPath[1]) {
        return false
    }
    return true
}

module.exports = isPin;

if (require.main === module) {

    var getPathdataDict  = require("../pathsInfo/top/getpathDataDict");
    const getStandardPieceDefs = require("../testObjects/getStandardPieceDefs");
    const sampleBoardDicts = require("../testObjects/sampleBoardDicts");
    const getStandardIdDict = require("../testObjects/getStandardIdDict");   

    var idDict = getStandardIdDict()
    var pieceDefs = getStandardPieceDefs()
    var pins = []
    var nonPins = []

    // test 1:
    pins = []
    nonPins = []
    console.log('test 1:')
    board = sampleBoardDicts["check_example3"]
    pathDict = getPathdataDict(board, [4, 4], 'W', pieceDefs, idDict)
    for (var direction of Object.keys(pathDict)) {
        if (isPin(pathDict[direction]))
            pins.push(...mapListXyToRf(pathDict[direction].coordPath))
        else
            nonPins.push(...mapListXyToRf(pathDict[direction].coordPath))
    }
    printBoard(board, "pins: red, non-pins: green", pins, nonPins, ["d4"])
    console.log('\n')


    // test 2:
    pins = []
    nonPins = []
    console.log('test 2:')
    var board = sampleBoardDicts["pinned_ex1"];
    var pathDict = getPathdataDict(board, [4, 7], 'W', pieceDefs, idDict)
    for (var direction of Object.keys(pathDict)) {
        if (isPin(pathDict[direction]))
            pins.push(...mapListXyToRf(pathDict[direction].coordPath))
        else
            nonPins.push(...mapListXyToRf(pathDict[direction].coordPath))
    }
    printBoard(board, "pins: red, non-pins: green", pins, nonPins, ["d7"])
    console.log('\n')

    // test 3:
    pins = []
    nonPins = []
    console.log('test 3:')
    board = sampleBoardDicts["pinned_ex2"];
    var pathDict = getPathdataDict(board, [4, 5], 'W', pieceDefs, idDict)
    for (var direction of Object.keys(pathDict)) {
        if (isPin(pathDict[direction]))
            pins.push(...mapListXyToRf(pathDict[direction].coordPath))
        else
            nonPins.push(...mapListXyToRf(pathDict[direction].coordPath))
    }
    printBoard(board, "pins: red, non-pins: green", pins, nonPins, ["d5"])
    console.log('\n')


}