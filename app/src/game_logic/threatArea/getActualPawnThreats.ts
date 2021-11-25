import {getSqrCase} from "../sqrCase/getSqrCase";
import {getPieceType} from "../pieceType/getPieceType";
import {xyToRf} from "../coordType/crdCnvrt";
import {ENEMY} from "../sqrCase/sqrCases";
import Board from "../types/Board";
import Color from "../types/Color";
import XY from "../types/XY";

export function getActualPawnThreats(board: Board, potentialPawnThreats, color: Color) {
    /*filter the list of potential pawn threats to get list of actual pawn threats**/
    return potentialPawnThreats.filter(
        (sqr: XY) =>
            getSqrCase(board, ...sqr, color) === ENEMY &&
            getPieceType(board[xyToRf(...sqr)]) === "P"
    );
}
