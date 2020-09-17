var  getSqrCase  = require("../../sqrCase/getSqrCase");
const  {OOB, EMPTY, FRIEND, ENEMY}  = require("../../sqrCase/sqrCases");


function filterInitJumps(jumps, board, color) {
    /* **/
    return jumps.filter(j => getSqrCase(board, j[0], j[1], color) != OOB &&  getSqrCase(board, j[0], j[1], color) != FRIEND)
}

module.exports = filterInitJumps;