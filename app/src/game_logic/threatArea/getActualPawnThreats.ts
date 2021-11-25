import { getSqrCase } from "../sqrCase/getSqrCase";
import { getPieceType } from "../pieceType/getPieceType";
import { xyToRf } from "../coordType/crdCnvrt";
import { ENEMY } from "../sqrCase/sqrCases";

export function getActualPawnThreats(board, potentialPawnThreats, color) {
    /*filter the list of potential pawn threats to get list of actual pawn threats**/
    var potentialPawnThreats = potentialPawnThreats.filter(
        (sqr) =>
            getSqrCase(board, ...sqr, color) === ENEMY &&
            getPieceType(board[xyToRf(...sqr)]) === "P"
    );
    return potentialPawnThreats;
}
