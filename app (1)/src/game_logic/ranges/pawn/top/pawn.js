import {getEnPassantAlignmentKey} from "../../../ranges/specialMoves/enPassant/getEnPassantAlignmentKey";
import {getPotential1SqrJump} from "../getPotential1SqrJump"
import {canEnpassant} from "../../specialMoves/enPassant/canEnPassant";
import {getPotentialCaptures} from "../getPotentialCaptures";
import {isActual1SqrJump} from "../isActual1SqrJump";
import {getActualCaptures} from "../getActualCaptures";
import {valid2SqrJump} from "../valid2SqrJump";
import {get2SqrJump} from "../get2SqrJump";
import {getTSqr} from "../../specialMoves/enPassant/getTSqr";
import {step_1sqr0d, step_1sqr180d} from "../../../helpers/stepFuncs";


export function pawn(board, sqr, color, jsonRecords, specialMoves) {
    /*get the range of pawn at location sqr and of the given color**/

    var range = [];
    var twoSqrJump, alignKey, tSqr, twoSqrJump, potentialCaptures;
    let potential1Sqr = getPotential1SqrJump(sqr, color);

    if (isActual1SqrJump(board, potential1Sqr, color)) {
        range.push(potential1Sqr);
    }

    if (valid2SqrJump(board, sqr, color, jsonRecords.pawnHistories)) {
        twoSqrJump = get2SqrJump(sqr, color);
        range.push(twoSqrJump);
    }

    if (
        canEnpassant(
            sqr,
            step_1sqr180d(...sqr),
            board,
            color,
            jsonRecords.pawnHistories,
            jsonRecords.numConsecutiveNonPawnMoves,
            jsonRecords.lastPawnMove
        )
    ) {
        alignKey = getEnPassantAlignmentKey(sqr, step_1sqr180d(...sqr));
        tSqr = getTSqr(color, alignKey);
        range.push(tSqr);
        specialMoves.addEnPassant([sqr, tSqr]);
    } 
    
    else if (
        canEnpassant(
            sqr,
            step_1sqr0d(...sqr),
            board,
            color,
            jsonRecords.pawnHistories,
            jsonRecords.numConsecutiveNonPawnMoves,
            jsonRecords.lastPawnMove
        )
    ) {
        alignKey = getEnPassantAlignmentKey(sqr, step_1sqr0d(...sqr));
        tSqr = getTSqr(color, alignKey);
        range.push(tSqr);
        specialMoves.addEnPassant([sqr, tSqr]);
    }

    potentialCaptures = getPotentialCaptures(sqr, color);
    range.push(...getActualCaptures(board,potentialCaptures, color));

    specialMoves.setPromos(board, sqr, range)

    return [range, specialMoves];
}

// module.exports = pawn;

/** for node.js
if (require.main === module) {
    
    import {dataDict} from "../../../testObjects/dataDicts/dd1";

    var board, range, specialMoves, whiteLocs, blackLocs, jsonRecords;

    
    board = sampleBoardDicts["pawn_range"]
    jsonRecords = new JsonRecords(initPawnIds(dataDict["pawn_range"]["json"], board))
    specialMoves = new SpecialMoves()
    blackLocs = [[1, 7], [2, 6], [3, 7], [6, 7], [7, 7], [4, 5], [5, 5], [8, 5]]
    whiteLocs = [[1, 2], [4, 2], [6, 2], [8, 2], [2, 4], [3, 4], [5, 4], [7, 5]]
    for (var sqr of whiteLocs) {
        [range, specialMoves] = pawn(board, sqr, 'W', jsonRecords, specialMoves)
        printBoard(board, '\nwhite', mapListXyToRf(range), null, [xyToRf(...sqr)])
    }
    for (var sqr of blackLocs) {
        [range, specialMoves] = pawn(board, sqr, 'B', jsonRecords, specialMoves)
        printBoard(board, '\nblack', mapListXyToRf(range), null, [xyToRf(...sqr)])
    }


    board = sampleBoardDicts["enpassant_test1"]
    jsonRecords = new JsonRecords(initPawnIds(dataDict["enpassant_test1"]["json"], board))
    specialMoves = new SpecialMoves()
    blackLocs = [[1, 7], [2, 5], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7]]
    whiteLocs = [[1, 2], [2, 2], [3, 5], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2]]
    for (var sqr of whiteLocs) {
        [range, specialMoves] = pawn(board, sqr, 'W', jsonRecords, specialMoves)
        printBoard(board, '\nwhite', mapListXyToRf(range), null, [xyToRf(...sqr)])
    }
    for (var sqr of blackLocs) {
        [range, specialMoves] = pawn(board, sqr, 'B', jsonRecords, specialMoves)
        printBoard(board, '\nblack', mapListXyToRf(range), null, [xyToRf(...sqr)])
    }

}
*/