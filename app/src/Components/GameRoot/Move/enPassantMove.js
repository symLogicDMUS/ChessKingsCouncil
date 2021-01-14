import { getSqrCase } from "../../helpers/getSqrCase";
import { isPawn } from "../../helpers/isPawn";
import {step1sqr0d, step1sqr180d} from "../../helpers/stepFuncs";
import { OOB, EMPTY, FRIEND, ENEMY } from "../../helpers/sqrCases";

const capturePawn = (enemyPawnRf, gameRoot, start, dest, dispatch) => {
    gameRoot.captured = gameRoot.board[enemyPawnRf]
    dispatch({type: 'remove', id: gameRoot.captured})
    gameRoot.board[enemyPawnRf] = '#'
    delete gameRoot.jsonRecords.pawnHistories[gameRoot.captured];
    gameRoot.specialMoves.removeEnpassant([start, dest]);
}

export function enPassantMove(gameRoot, start, dest, dispatch) {
    /**
    start: start square of pawn capturing by en-passant
    dest: destination square of pawn capturing by en-passant
    color: color of pawn making capture
    x: x coordinate of square either directly left or directly right of start
    y: y coordinate unchanged, same as start. returned with x.
    */

    let color = gameRoot.getColorLastMove()

    if (gameRoot.specialMoves.isEnPassant([start, dest])) {
        const rf0 = step1sqr0d(start);
        const rf180 = step1sqr180d(start);
        if (getSqrCase(gameRoot.board, rf0, color) === ENEMY && isPawn(gameRoot.board[rf0]) && gameRoot.jsonRecords.isLastPawnMove(rf0)) {
            capturePawn(rf0, gameRoot, start, dest, dispatch)
        }
        else if (getSqrCase(gameRoot.board, rf180, color) === ENEMY && isPawn(gameRoot.board[rf180]) && gameRoot.jsonRecords.isLastPawnMove(rf180)) {
            capturePawn(rf180, gameRoot, start, dest, dispatch)
        }
        gameRoot.jsonRecords.lastPawnMove = dest;
    }
    
    else if (isPawn(gameRoot.board[dest])) {
        gameRoot.jsonRecords.lastPawnMove = dest;
    }

}