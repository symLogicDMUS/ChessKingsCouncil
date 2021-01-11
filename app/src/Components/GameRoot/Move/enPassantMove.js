import { getSqrCase } from "../../helpers/getSqrCase";
import { isPawn } from "../../helpers/isPawn";
import {step1sqr0d, step1sqr180d} from "../../helpers/stepFuncs";
import { OOB, EMPTY, FRIEND, ENEMY } from "../../helpers/sqrCases";

const capturePawn = (enemyPawnRf, gameroot, start, dest, dispatch) => {
    gameroot.captured = gameroot.board[enemyPawnRf]
    dispatch({type: 'remove', id: gameroot.captured})
    gameroot.board[enemyPawnRf] = '#'
    delete gameroot.jsonRecords.pawnHistories[gameroot.captured];
    gameroot.specialMoves.removeEnpassant([start, dest]);
}

export function enPassantMove(gameroot, start, dest, dispatch) {
    /**
    start: start square of pawn capturing by en-passant
    dest: destination square of pawn capturing by en-passant
    color: color of pawn making capture
    x: x coordinate of square either directly left or directly right of start
    y: y coordinate unchanged, same as start. returned with x.
    */

    let color = gameroot.getColorLastMove()

    if (gameroot.specialMoves.isEnPassant([start, dest])) {
        const rf0 = step1sqr0d(start);
        const rf180 = step1sqr180d(start);
        if (getSqrCase(gameroot.board, rf0, color) === ENEMY && isPawn(gameroot.board[rf0]) && gameroot.jsonRecords.isLastPawnMove(rf0)) {
            capturePawn(rf0, gameroot, start, dest, dispatch)
        }
        else if (getSqrCase(gameroot.board, rf180, color) === ENEMY && isPawn(gameroot.board[rf180]) && gameroot.jsonRecords.isLastPawnMove(rf180)) {
            capturePawn(rf180, gameroot, start, dest, dispatch)
        }
        gameroot.jsonRecords.lastPawnMove = dest;
    }
    
    else if (isPawn(gameroot.board[dest])) {
        gameroot.jsonRecords.lastPawnMove = dest;
    }

}