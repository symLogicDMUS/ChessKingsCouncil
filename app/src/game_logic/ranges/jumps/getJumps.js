import {getInitJumps} from "./getInitJumps";
import {filterInitJumps} from "./filterInitJumps";


export function getJumps(offsets, board, sqr, color) {
    /*jumps are square that can be reached through a piece jumping**/
    let jumps = getInitJumps(offsets, sqr);
    jumps = filterInitJumps(jumps, board, color)
    return jumps
}