import Offset from "../../types/Offset";
import XY from "../../types/XY";

export function getInitJumps(offsets: XY [], sqr: XY) {
    /*jumps are square that can be reached through a piece jumping**/
    let x, y;
    let jumps = [];
    for (const offset of offsets) {
        [x, y] = offset;
        jumps.push([sqr[0] + x, sqr[1] + y]);
    }
    return jumps;
}
