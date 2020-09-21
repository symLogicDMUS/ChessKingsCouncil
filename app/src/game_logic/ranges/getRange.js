import {getPaths} from "./paths/getPaths";
import {getJumps} from "./jumps/getJumps";
import {xyToRf} from "../coordType/crdCnvrt";


export function getRange(board, sqr, color, pieceDefs, idDict) {
    /* **/
    var id = board[xyToRf(...sqr)]
    var fenId = id[1].toLowerCase()
    var name = idDict[fenId]
    var def = pieceDefs[name]
    var offsets = def[color]['offsets']
    var stepFuncNames = def[color]['spans']
    var paths = getPaths(stepFuncNames, board, sqr, color)
    var jumps = getJumps(offsets, board, sqr, color)
    paths.push(...jumps)
    return paths;
}

// module.exports = getRange;

/** for node.js
if (require.main === module) {
    var board = sampleBoardDicts['ranges_test']
    var idDict = getStandardIdDict()
    var pieceDefs = getStandardPieceDefs()
    var pieceRange;
    for (var sqr of [[2, 1], [3, 1], [4, 1], [1, 3], [2, 3], [3, 3], [4, 3], [6, 3], [7, 3], [8, 3]]) {
        pieceRange = getRange(board, sqr, 'W', pieceDefs, idDict)
        printBoard(board, `\n${board[xyToRf(...sqr)]}`, mapListXyToRf(pieceRange), null, [xyToRf(...sqr)])
    }
    for (var sqr of [[1, 5], [2, 5], [3, 5], [4, 5], [6, 5], [7, 5], [8, 5]]) {
        pieceRange = getRange(board, sqr, 'B', pieceDefs, idDict)
        printBoard(board, `\n${board[xyToRf(...sqr)]}`, mapListXyToRf(pieceRange), null, [xyToRf(...sqr)])
    }

}
*/

