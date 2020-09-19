import {isEnpBlackAttR} from "./isEnpBlackAttR";
import {isEnpWhiteAttR} from "./isEnpWhiteAttR";
import {pawnMovedOnce2Sqrs} from "./pawnMovedOnce2Sqrs" 
import {getPieceType} from "../../../pieceType/getPieceType";
import {getSqrCase} from "../../../sqrCase/getSqrCase";
import {ENEMY} from "../../../sqrCase/sqrCases";
import {xyToRf, rfToXy} from "../../../coordType/crdCnvrt";
import {JsonRecords} from "../../../JsonRecords/JsonRecords";
import {replaceRankfileWithPawnId} from "../../../JsonRecords/replaceRankfileWithPawnId";


export function canEnpassant(attacking, attacked, board, color, pawnHistories, ncnpm, lastPawnMove) {
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
    if (xyToRf(...attacked) != lastPawnMove) {
        return false
    }
    return true
}

// module.exports = canEnpassant;


/** for node.js
if (require.main === module) {
    // test 1, enPassantTest1:
    
    import {sampleBoardDicts} from "../../../testObjects/sampleBoardDicts"
    import {dataDict} from "../../../testObjects/dataDicts/dd1";
    import {printBoard} from "../../../printers/printBoard";
    import {step_1sqr180d} from "../../../helpers/stepFuncs";
    import {initPawnIds} from "../../../JsonRecords/initPawnIds";
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
*/