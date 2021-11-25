import { getInitJumps } from "./getInitJumps";
import { filterInitJumps } from "./filterInitJumps";
import Color from "../../types/Color";
import XY from "../../types/XY";
import Board from "../../types/Board";

export function getJumps(offsets: XY [], board: Board, sqr: XY, color: Color) {
    /*jumps are square that can be reached through a piece jumping**/
    let jumps = getInitJumps(offsets, sqr);
    jumps = filterInitJumps(jumps, board, color);
    return jumps;
}
