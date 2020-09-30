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
    if (gameroot.specialMoves.isEnPassant([start, dest])) {

        var rf0 = step1sqr0d(start)  
        var rf180 = step1sqr180d(start)
    
        if (getSqrCase(gameroot.board, rf0, color) === ENEMY && isPawn(gameroot.board[rf0]) && gameroot.jsonRecords.isLastPawnMove(rf0)) {
            gameroot.captured = gameroot.board[rf0]
            gameroot.board[rf0] = '#'
            delete gameroot.jsonRecords.pawnHistories[gameroot.captured];
            gameroot.specialMoves.removeEnpassant([start, dest]);
        }
    
        else if (getSqrCase(gameroot.board, rf180, color) === ENEMY && isPawn(gameroot.board[rf180]) && gameroot.jsonRecords.isLastPawnMove(rf180)) {
            gameroot.captured = gameroot.board[rf180]
            gameroot.board[rf180] = '#'
            delete gameroot.jsonRecords.pawnHistories[gameroot.captured];
            gameroot.specialMoves.removeEnpassant([start, dest]);
        }
    
        gameroot.jsonRecords.lastPawnMove = dest;
    }
    
    else if (isPawn(gameroot.board[dest])) {
        gameroot.jsonRecords.lastPawnMove = dest;
    }

}