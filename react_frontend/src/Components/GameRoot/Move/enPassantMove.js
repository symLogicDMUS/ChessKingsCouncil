import { getSqrCase } from "../../helpers/getSqrCase";
import { isPawn } from "../gameRootHelpers/isPawn";
import {step1sqr0d, step1sqr180d} from "../../helpers/stepFuncs";
import { OOB, EMPTY, FRIEND, ENEMY } from "../../helpers/sqrCases";

export function enPassantMove(gameroot, start, dest, color) {
    /**
    start: start square of pawn capturing by en-passant
    dest: destination square of pawn capturing by en-passant
    color: color of pawn making capture
    x: x coordinate of square either directly left or directly right of start
    y: y coordinate unchanged, same as start. returned with x.
    */
    if (! gameroot.specialMoves.isEnPassant([start, dest])) {
        return
    }
    
    var rf = step1sqr0d(start)  //  0
    if (getSqrCase(gameroot.board, rf, color) === ENEMY && isPawn(gameroot.board[rf])) {
        gameroot.captured = gameroot.board[rf]
        gameroot.board[rf] = '#'
        delete gameroot.jsonRecords.pawnHistories[gameroot.captured];
        gameroot.specialMoves.removeEnpassant([start, dest]);
        return
    }

    var rf = step1sqr180d(start)  //  180
    if (getSqrCase(gameroot.board, rf, color) === ENEMY && isPawn(gameroot.board[rf])) {
        gameroot.captured = gameroot.board[rf]
        gameroot.board[rf] = '#'
        delete gameroot.jsonRecords.pawnHistories[gameroot.captured];
        gameroot.specialMoves.removeEnpassant([start, dest]);
        return
    }

    console.log("error: pawn not found")
}