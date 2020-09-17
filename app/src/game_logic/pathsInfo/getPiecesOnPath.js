import {outOfBounds} from "../sqrCase/oob";
import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
import {getPieceMatchesPath} from "./getPieceMatchesPath";
import {xyToRf} from "../coordType/crdCnvrt";
import {
    step_1sqr90d,
    step_1sqr45d,
    step_1sqr0d,
    step_1sqr315d,
    step_1sqr270d,
    step_1sqr225d,
    step_1sqr180d,
    step_1sqr135d,
} from "../helpers/stepFuncs";

export function getPiecesOnPath(board, x, y, takeStep) {
    /**
    travel a path starting at location (x, y) until step out of bounds. add each
    piece id encountered to list
    */
    [x, y] = takeStep(x, y);
    let pieceList = [];
    while (!outOfBounds(x, y)) {
        if (board[xyToRf(x, y)] != "#") {
            pieceList.push(board[xyToRf(x, y)]);
        }
        [x, y] = takeStep(x, y);
    }
    return pieceList;
}

// module.exports = getPiecesOnPath;

/** for node.js
if (require.main === module) {

    import {printBoard} from "../printers/printBoard";
    import {getRfsFromIds} from "../helpers/getRfsFromIds";

    let board = sampleBoardDicts["check_example3"];
    var pieceList, pieceLocs;


    // test 1, 90 degrees
    console.log("test 1:");
    pieceList = getPiecesOnPath(board, 4, 4, step_1sqr90d);
    pieceLocs = getRfsFromIds(board, pieceList) 
    printBoard(board, "90", pieceLocs, ["d4"]);
    console.log("\n");

    // test 2, 45 degrees
    console.log("test 2:");
    pieceList = getPiecesOnPath(board, 4, 4, step_1sqr45d);
    pieceLocs = getRfsFromIds(board, pieceList) 
    printBoard(board, "45", pieceLocs, ["d4"]);
    console.log("\n");

    // test 3, 0 degrees
    console.log("test 3:");
    pieceList = getPiecesOnPath(board, 4, 4, step_1sqr0d);
    pieceLocs = getRfsFromIds(board, pieceList) 
    printBoard(board, "0", pieceLocs, ["d4"]);
    console.log("\n");

    // test 4, 315 degrees
    console.log("test 4:");
    pieceList = getPiecesOnPath(board, 4, 4, step_1sqr315d);
    pieceLocs = getRfsFromIds(board, pieceList) 
    printBoard(board, "315", pieceLocs, ["d4"]);
    console.log("\n");

    // test 5, 270 degrees
    console.log("test 5:");
    pieceList = getPiecesOnPath(board, 4, 4, step_1sqr270d);
    pieceLocs = getRfsFromIds(board, pieceList) 
    printBoard(board, "270", pieceLocs, ["d4"]);
    console.log("\n");

    // test 6, 225 degrees
    console.log("test 6:");
    pieceList = getPiecesOnPath(board, 4, 4, step_1sqr225d);
    pieceLocs = getRfsFromIds(board, pieceList) 
    printBoard(board, "225", pieceLocs, ["d4"]);
    console.log("\n");

    // test 7, 180 degrees
    console.log("test 7:");
    pieceList = getPiecesOnPath(board, 4, 4, step_1sqr180d);
    pieceLocs = getRfsFromIds(board, pieceList) 
    printBoard(board, "180", pieceLocs, ["d4"]);
    console.log("\n");

    // test 8, 135 degrees
    console.log("test 8:");
    pieceList = getPiecesOnPath(board, 4, 4, step_1sqr135d);
    pieceLocs = getRfsFromIds(board, pieceList) 
    printBoard(board, "135", pieceLocs, ["d4"]);
    console.log("\n");

}
*/
