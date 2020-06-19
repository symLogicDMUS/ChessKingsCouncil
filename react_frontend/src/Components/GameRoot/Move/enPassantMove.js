import { getSqrCase } from "../../helpers/getSqrCase";
import { isPawn } from "../../helpers/isPawn";
import {step1sqr0d, step1sqr180d} from "../../helpers/stepFuncs";
import { OOB, EMPTY, FRIEND, ENEMY } from "../../helpers/sqrCases";

export function enPassantMove(data, start, dest, color) {
    /**
    start: start square of pawn capturing by en-passant
    dest: destination square of pawn capturing by en-passant
    color: color of pawn making capture
    x: x coordinate of square either directly left or directly right of start
    y: y coordinate unchanged, same as start. returned with x.
    */
    if (! data.specialMoves.isEnPassant([start, dest])) {
        return
    }
    
    var rf = step1sqr0d(start)  //  0
    if (getSqrCase(data.board, rf, color) === ENEMY && isPawn(data.board[rf])) {
        data.captured = data.board[rf]
        data.board[rf] = '#'
        delete data.jsonRecords.pawnHistories[data.captured]
        return
    }

    var rf = step1sqr180d(start)  //  180
    if (getSqrCase(data.board, rf, color) === ENEMY && isPawn(data.board[rf])) {
        data.captured = data.board[rf]
        data.board[rf] = '#'
        delete data.jsonRecords.pawnHistories[data.captured]
        return
    }

    console.log("error: pawn not found")
}