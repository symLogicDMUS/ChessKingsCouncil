var  printBoard  = require("../../printers/printBoard");
var  getInitJumps  = require("../../ranges/jumps/getInitJumps");
var  filterInitJumps  = require("../../ranges/jumps/filterInitJumps");
var  sampleBoardDicts  = require("../../testObjects/sampleBoardDicts");


function getJumps(offsets, board, sqr, color) {
    /*jumps are square that can be reached through a piece jumping**/
    var jumps = getInitJumps(offsets, sqr)
    jumps = filterInitJumps(jumps, board, color)
    return jumps
}

module.exports = getJumps;

if (require.main === module) {

    const mapListXyToRf = require("../../coordType/mapListXyToRf");

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