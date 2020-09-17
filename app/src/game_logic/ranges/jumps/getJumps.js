import {printBoard} from "../../printers/printBoard";
import {getInitJumps} from "../../ranges/jumps/getInitJumps";
import {filterInitJumps} from "../../ranges/jumps/filterInitJumps";
import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";


export function getJumps(offsets, board, sqr, color) {
    /*jumps are square that can be reached through a piece jumping**/
    var jumps = getInitJumps(offsets, sqr)
    jumps = filterInitJumps(jumps, board, color)
    return jumps
}

// module.exports = getJumps;

/** for node.js
if (require.main === module) {

    import {mapListXyToRf} from "../../coordType/mapListXyToRf";

    var offsets = [
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [-2, -1],
        [-2, 1],
        [2, -1],
        [2, 1],
    ];
    var board = sampleBoardDicts['ranges_test'];
    var jumps;


    jumps = getJumps(offsets, board, [2, 3], 'W')
    printBoard(board, "\nwhite", mapListXyToRf(jumps), ["b3"])

    jumps = getJumps(offsets, board, [7, 3], 'W')
    printBoard(board, "\nwhite", mapListXyToRf(jumps), ["g3"])

    jumps = getJumps(offsets, board, [2, 5], 'B')
    printBoard(board, "\nblack", mapListXyToRf(jumps), ["b5"])

    jumps = getJumps(offsets, board, [7, 5], 'B')
    printBoard(board, "\nblack", mapListXyToRf(jumps), ["g5"])

}
*/