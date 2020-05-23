import { getSqrCase } from "./getSqrCase";
import { getPieceType } from "./getPieceType";
import {step1sqr0d, step1sqr180d} from "./stepFuncs";
import { OOB, EMPTY, FRIEND, ENEMY } from "./sqrCases";

export function enPassantMove(chess, start, dest, color) {
    /**
    start: start square of pawn capturing by en-passant
    dest: destination square of pawn capturing by en-passant
    color: color of pawn making capture
    x: x coordinate of square either directly left or directly right of start
    y: y coordinate unchanged, same as start. returned with x.
    */
    if (! chess.specialMoves.isEnPassant((start, dest))) {
        return
    }
    
    var rf = step1sqr0d(start)  //  0
    if (getSqrCase(chess.board, rf, color) === ENEMY && getPieceType(chess.board[rf]) === 'Pawn') {
        chess.captured = chess.board[rf]
        chess.board[rf] = '#'
        return
    }

    var rf = step1sqr180d(start)  //  180
    if (getSqrCase(chess.board, rf, color) === ENEMY && getPieceType(chess.board[rf]) === 'Pawn') {
        chess.captured = chess.board[rf]
        chess.board[rf] = '#'
        return
    }

    console.log("error: pawn not found")
}