import { step_1sqr90d, step_1sqr270d } from "../../helpers/stepFuncs";
import { getSqrCase } from "../../sqrCase/getSqrCase";
import { xyToRf } from "../../coordType/crdCnvrt";
import SqrCase from "../../types/SqrCase";
import Color from "../../types/Color";
import Board from "../../types/Board";
import XY from "../../types/XY";
import Coord from "../../types/Coord";

export function valid2SqrJump(board: Board, sqr: XY, color: Color, pawnHist: XY []) {
    /*get the square that might be a first move 2 square jump for pawn**/

    const id = board[xyToRf(...sqr)];
    let [x, y] = [...sqr];

    if (pawnHist[id].length !== 1) {
        return false;
    }

    if (color === "W") {
        [x, y] = step_1sqr90d(...sqr);
        if (getSqrCase(board, x, y, color) !== SqrCase.EMPTY) {
            return false;
        }
        [x, y] = step_1sqr90d(x, y);
        if (getSqrCase(board, x, y, color) !== SqrCase.EMPTY) {
            return false;
        }
    } else if (color === "B") {
        [x, y] = step_1sqr270d(...sqr);
        if (getSqrCase(board, x, y, color) !== SqrCase.EMPTY) {
            return false;
        }
        [x, y] = step_1sqr270d(x, y);
        if (getSqrCase(board, x, y, color) !== SqrCase.EMPTY) {
            return false;
        }
    } else {
        console.log("error valid_2SqrJump.py: invalid color");
        return -1;
    }

    return true;
}

