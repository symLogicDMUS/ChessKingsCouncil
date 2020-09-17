const  getSqrCase  = require("../../sqrCase/getSqrCase");
const {xyToRf} = require("../../coordType/crdCnvrt")
const  {EMPTY}  = require("../../sqrCase/sqrCases");
const {step_1sqr90d,  step_1sqr270d} = require("../../helpers/stepFuncs");


function valid2SqrJump(board, sqr, color, pawnHist) {
    /*get the square that might be a first move 2 square jump for pawn**/
    
    var id = board[xyToRf(...sqr)]
    var [x, y] = [...sqr]

    if (pawnHist[id].length != 1) {
        return false
    }

    if (color === 'W') {
        [x, y] = step_1sqr90d(...sqr)
        if (getSqrCase(board, x, y, color) != EMPTY) {
            return false
        }
        [x, y] = step_1sqr90d(x, y)
        if (getSqrCase(board, x, y, color) != EMPTY) {
            return false
        }
    }

    else if (color === 'B') {
        [x, y] = step_1sqr270d(...sqr)
        if (getSqrCase(board, x, y, color) != EMPTY) {
            return false
        }
        [x, y] = step_1sqr270d(x, y)
        if (getSqrCase(board, x, y, color) != EMPTY) {
            return false
        }
    }

    else {
        console.log('error valid_2SqrJump.py: invalid color')
        return -1
    }

    return true
}

module.exports = valid2SqrJump;

if (require.main === module) {

    const printBoard = require("../../printers/printBoard");
    const sampleBoardDicts = require("../../testObjects/sampleBoardDicts");
    const dataDict = require("../../testObjects/dataDicts/dd1")
    const replaceRankfileWithPawnId = require("../../apiHelpers/replaceRankfileWithPawnId");
    const mapDictListRfToXy = require("../../coordType/mapDictListRfToXy")

    var board = sampleBoardDicts["pawn_range"]
    var pawnHistories = mapDictListRfToXy(replaceRankfileWithPawnId(board, dataDict["pawn_range"]["json"]["pawn_histories"]))
    var whiteLocs = [[1, 2], [4, 2], [6, 2], [8, 2], [2, 4], [3, 4], [5, 4], [7, 5]]
    var blackLocs = [[1, 7], [2, 6], [3, 7], [6, 7], [7, 7], [4, 5], [5, 5], [8, 5]]


    for (var sqr of whiteLocs) {
        if (valid2SqrJump(board, sqr, 'W', pawnHistories))
            printBoard(board, `${board[xyToRf(...sqr)]}, green: yes, red: no, blue: start square`, null, [xyToRf(sqr[0], sqr[1] + 2)], [xyToRf(...sqr)])
        else
            printBoard(board, `${board[xyToRf(...sqr)]}, green: yes, red: no, blue: start square`, [xyToRf(sqr[0], sqr[1] + 2)], null, [xyToRf(...sqr)])
    }

    for (var sqr of blackLocs) {
        if (valid2SqrJump(board, sqr, 'B', pawnHistories))
            printBoard(board, `${board[xyToRf(...sqr)]}, green: yes, red: no, blue: start square`, null, [xyToRf(sqr[0], sqr[1] - 2)], [xyToRf(...sqr)])
        else
            printBoard(board, `${board[xyToRf(...sqr)]}, green: yes, red: no, blue: start square`, [xyToRf(sqr[0], sqr[1] - 2)], null, [xyToRf(...sqr)])
    }

}