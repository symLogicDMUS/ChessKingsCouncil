import {getSqrCase} from "../../sqrCase/getSqrCase";
import  {OOB, FRIEND}  from "../../sqrCase/sqrCases";

export function filterInitJumps(jumps, board, color) {
    /* **/
    return jumps.filter(j => getSqrCase(board, j[0], j[1], color) !== OOB &&  getSqrCase(board, j[0], j[1], color) !== FRIEND)
}

// module.exports = filterInitJumps;