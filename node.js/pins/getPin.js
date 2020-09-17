var  getIndexAttackingPiece  = require("./getIndexAttackingPiece");
var  getSubPath  = require("../pathsInfo/getSubPath");
var  PathData  = require("../pathsInfo/PathData");



function getPin(pathData) {
    /*return the id of the piece that is pinned, &&  the coordinate path it is pinned to**/
    var i = getIndexAttackingPiece(pathData.pieces, pathData.path)
    var pinPath = getSubPath(pathData.coordPath, i)
    return [pathData.pieces[0], pinPath]
}

module.exports = getPin;


if (require.main === module) {
    
    const printBoard = require("../printers/printBoard");
    const sampleBoardDicts = require("../testObjects/sampleBoardDicts");
    const getPieceLoc = require("../helpers/getPieceLoc");
    var board = sampleBoardDicts["checkExample3"]
    const mapListXyToRf = require("../coordType/mapListXyToRf");
    const allExcept = require("../helpers/allExcept")

    /**NOTE: pin paths do not follow any  */

    var pathData = new PathData('90d')
    pathData.hardcode(
        ['#', 'WP2', 'BR2', 'BK1'],
        [[4, 5], [4, 6], [4, 7], [4, 8]],
        ['WP2', 'BR2', 'BK1'],
        ['f', 'e', 'e'],
        [false, true, false]
    )
    pinnedPieceLoc = getPieceLoc(board, getPin(pathData)[0])
    restOfPath = allExcept(mapListXyToRf(getPin(pathData)[1]), pinnedPieceLoc)
    printBoard(board, "90d", [pinnedPieceLoc], null, ["d4"], restOfPath)
    console.log("")


    pathData = new PathData('45d')
    pathData.hardcode(
        ['#', 'WP3', 'WP4', 'BB2'],
        [[5, 5], [6, 6], [7, 7], [8, 8]],
        ['WP3', 'WP4', 'BB2'],
        ['f', 'f', 'e'],
        [false, false, true])
    pinnedPieceLoc = getPieceLoc(board, getPin(pathData)[0])
    restOfPath = allExcept(mapListXyToRf(getPin(pathData)[1]), pinnedPieceLoc)
    printBoard(board, "45d", [pinnedPieceLoc], null, ["d4"], restOfPath)
    console.log("")


    pathData = new PathData('0d')
    pathData.hardcode(
        ['#', 'WQ2', 'WB1', 'BR1'],
        [[5, 4], [6, 4], [7, 4], [8, 4]],
        ['WQ2', 'WB1', 'BR1'],
        ['f', 'f', 'e'],
        [true, false, true])
    pinnedPieceLoc = getPieceLoc(board, getPin(pathData)[0])
    restOfPath = allExcept(mapListXyToRf(getPin(pathData)[1]), pinnedPieceLoc)
    printBoard(board, "0d", [pinnedPieceLoc], null, ["d4"], restOfPath)
    console.log("")


    pathData = new PathData('315d')
    pathData.hardcode(
        ['#', 'WR2', 'BQ2'],
        [[5, 3], [6, 2], [7, 1]],
        ['WR2', 'BQ2'],
        ['f', 'e'],
        [false, true])
    pinnedPieceLoc = getPieceLoc(board, getPin(pathData)[0])
    restOfPath = allExcept(mapListXyToRf(getPin(pathData)[1]), pinnedPieceLoc)
    printBoard(board, "315d", [pinnedPieceLoc], null, ["d4"], restOfPath)
    console.log("")


    pathData = new PathData('270d')
    pathData.hardcode(
        ['WP1', 'WR1', 'BQ1'],
        [[4, 3], [4, 2], [4, 1]],
        ['WP1', 'WR1', 'BQ1'],
        ['f', 'f', 'e'],
        [false, true, true])
    pinnedPieceLoc = getPieceLoc(board, getPin(pathData)[0])
    restOfPath = allExcept(mapListXyToRf(getPin(pathData)[1]), pinnedPieceLoc)
    printBoard(board, "270d", [pinnedPieceLoc], null, ["d4"], restOfPath)
    console.log("")


    pathData = new PathData('225d')
    pathData.hardcode(
        ['WN1', '#', 'BB1'],
        [[3, 3], [2, 2], [1, 1]],
        ['WN1', 'BB1'],
        ['f', 'e'],
        [false, true])
    pinnedPieceLoc = getPieceLoc(board, getPin(pathData)[0])
    restOfPath = allExcept(mapListXyToRf(getPin(pathData)[1]), pinnedPieceLoc)
    printBoard(board, "225d", [pinnedPieceLoc], null, ["d4"], restOfPath)
    console.log("")


    pathData = new PathData('180d')
    pathData.hardcode(
        ['WQ1', '#', 'BQ3'],
        [[3, 4], [2, 4], [1, 4]],
        ['WQ1', 'BQ3'],
        ['f', 'e'],
        [true, true])
    pinnedPieceLoc = getPieceLoc(board, getPin(pathData)[0])
    restOfPath = allExcept(mapListXyToRf(getPin(pathData)[1]), pinnedPieceLoc)
    printBoard(board, "180d", [pinnedPieceLoc], null, ["d4"], restOfPath)
}