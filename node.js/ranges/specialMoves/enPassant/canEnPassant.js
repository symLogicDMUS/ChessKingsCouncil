const  isEnpBlackAttR  = require("./isEnpBlackAttR");
const  isEnpWhiteAttR  = require("./isEnpWhiteAttR");
const  pawnMovedOnce2Sqrs = require("./pawnMovedOnce2Sqrs") 
const  getPieceType  = require("../../../pieceType/getPieceType");
const  getSqrCase  = require("../../../sqrCase/getSqrCase");
const  {ENEMY}  = require("../../../sqrCase/sqrCases");
const  {xyToRf, rfToXy} = require("../../../coordType/crdCnvrt");
const  JsonRecords  = require("../../../JsonRecords/JsonRecords");
const replaceRankfileWithPawnId = require("../../../JsonRecords/replaceRankfileWithPawnId");


function canEnpassant(attacking, attacked, board, color, pawnHistories, ncnpm, lastPawnMove) {
    /**return true if an en-passant can be performed given sqr1 &&  sqr2 alignment, else false
       ncnpm: Number Consecutive Non Pawn Moves
    */
    if (color === 'W' &&  ! isEnpWhiteAttR(attacking)) {
        return false
    }
    if (color === 'B' &&  ! isEnpBlackAttR(attacking)) {
        return false
    }
    if (getSqrCase(board, attacked[0], attacked[1], color) != ENEMY) {
        return false
    }
    if (getPieceType(board[xyToRf(...attacked)]) != 'P') {
        return false
    }
    if (ncnpm != 0) {
        return false
    }
    if (! pawnMovedOnce2Sqrs(pawnHistories, board[xyToRf(...attacked)])) {
        return false
    }
    if (attacked.toString() != lastPawnMove.toString()) {
        return false
    }
    return true
}

module.exports = canEnpassant;


if (require.main === module) {
    // test 1, enPassantTest1:
    
    const sampleBoardDicts = require("../../../testObjects/sampleBoardDicts")
    const dataDict = require("../../../testObjects/dataDicts/dd1");
    const printBoard = require("../../../printers/printBoard");
    const {step_1sqr180d} = require("../../../helpers/stepFuncs");
    const initPawnIds = require("../../../JsonRecords/initPawnIds");
    var board, records, jsonRecords;

    board = sampleBoardDicts["enpassant_test1"];
    records = dataDict["enpassant_test1"]["json"]

    jsonRecords = new JsonRecords(initPawnIds(records, board))
    for (var rf of Object.keys(board)) {
        if (getPieceType(board[rf]) === "P") {
            if (
                canEnpassant(
                    rfToXy(rf),
                    step_1sqr180d(...rfToXy(rf)),
                    board,
                    "W",
                    jsonRecords.pawnHistories,
                    jsonRecords.numConsecutiveNonPawnMoves,
                    jsonRecords.lastPawnMove
                )
            ) {
                printBoard(board, "red: attacking, green: attacked", [rf], [xyToRf(...step_1sqr180d(...rfToXy(rf)))] );
            }
        }
    }

    //console.log(canEnpassant([3, 5], [2, 5], board, 'W', jsonRecords.pawnHistories, jsonRecords.numConsecutiveNonPawnMoves, jsonRecords.lastPawnMove))
}