import { getSqrCase } from "../../sqrCase/getSqrCase";
import { OOB, FRIEND } from "../../sqrCase/sqrCases";
import Board from "../../types/Board";
import Color from "../../types/Color";
import XY from "../../types/XY";
import SqrCase from "../../types/SqrCase";

export function filterInitJumps(jumps: XY [], board: Board, color: Color) {
    /* **/
    return jumps.filter(
        (j) =>
            getSqrCase(board, j[0], j[1], color) !== SqrCase.OOB &&
            getSqrCase(board, j[0], j[1], color) !== SqrCase.FRIEND
    );
}

// module.exports = filterInitJumps;
