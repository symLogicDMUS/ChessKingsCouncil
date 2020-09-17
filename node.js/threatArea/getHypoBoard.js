const { xyToRf } = require("../coordType/crdCnvrt");
var  ply  = require("../helpers/ply");


function getHypoBoard(board, start, dest) {
    /**get a temporary board where a move from start to dest has taken place. used to evaluate the would-be for that
        scenenario
    */
    var tempBoard = JSON.parse(JSON.stringify(board));
    var [tempBoard, captured] = ply(tempBoard, start, dest);
    return tempBoard;
}

module.exports = getHypoBoard;

if (require.main === module) {
    
    const printBoard = require("../printers/printBoard");
    const sampleBoardDicts = require("../testObjects/sampleBoardDicts");

    var board = sampleBoardDicts['king_range_test']


    printBoard(board, 'before', xyToRf(5, 4), null, xyToRf(4, 3))
    board = getHypoBoard(board, [4, 3], [5, 4])
    printBoard(board, 'after', xyToRf(5, 4))
}