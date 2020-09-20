import { xyToRf } from "../coordType/crdCnvrt"
import { step_1sqr0d, step_1sqr180d } from "../helpers/stepFuncs"
import { getPieceType } from "../pieceType/getPieceType"
import {getSqrCase} from "../sqrCase/getSqrCase"
import {ENEMY} from "../sqrCase/sqrCases"


export function aiEnPassantMove(responseBoard, start, dest, color, specialMoves) {
    
    if (! specialMoves.isEnPassant([start, dest])) {
        return [responseBoard, null]
    }

    var [x, y] = step_1sqr0d(start[0], start[1])
    if (getSqrCase(responseBoard, x, y, color) === ENEMY && getPieceType(responseBoard[xyToRf(x, y)]) === 'P') {
        var captured = responseBoard[xyToRf(x, y)]
        responseBoard[xyToRf(x, y)] = '#'
        return [responseBoard, captured]
    }

    var [x, y] = step_1sqr180d(start[0], start[1])
    if (getSqrCase(responseBoard, x, y, color) === ENEMY && getPieceType(responseBoard[xyToRf(x, y)]) === 'P') {
        var captured = responseBoard[xyToRf(x, y)]
        responseBoard[xyToRf(x, y)] = '#'
        return [responseBoard, captured]
    }

    console.log("error: pawn not found")
    return [responseBoard, null]
}