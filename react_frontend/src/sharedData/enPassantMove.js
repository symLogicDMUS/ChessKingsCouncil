import { getSqrCase } from "./getSqrCase";
import { getPieceType } from "./getPieceType";
import {step1sqr0d, step1sqr180d} from "./stepFuncs";
import {OOB, ENEMY, FRIEND, EMPTY} from "./sqrCases";

export function enPassantMove(board, start, dest, color, specialMoves) {
    /**
    start: start square of pawn capturing by en-passant
    dest: destination square of pawn capturing by en-passant
    color: color of pawn making capture
    x: x coordinate of square either directly left or directly right of start
    y: y coordinate unchanged, same as start. returned with x.
    */
    if (! specialMoves.isEnPassant((start, dest))) {
        return [board, 'None']
    }
    
    var [rf] = step1sqr0d(start)  //  0
    if (getSqrCase(board, rf, color) === ENEMY && getPieceType(board[rf]) === 'Pawn') {
        let captured = board[rf]
        board[rf] = '#'
        return [board, captured]
    }

    var [rf] = step1sqr180d(start)  //  180
    if (getSqrCase(board, rf, color) === ENEMY && getPieceType(board[rf]) === 'Pawn') {
        let captured = board[rf]
        board[rf] = '#'
        return [board, captured]
    }
    console.log("error: pawn not found")
    return [board, 'None']
}