import {outOfBounds} from "../sqrCase/oob";
import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
import {xyToRf} from "../coordType/crdCnvrt"
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


export function getPath(board, x, y, takeStep) {
  /**
    travel a path starting at location (x, y) until step out of bounds. add assignIds
    to list. direction moving depends on which step function takeStep is
    */
    var rf, id;
    var sqrList = []; 
    [x, y] = takeStep(x, y);
    while (!outOfBounds(x, y)) {
        rf = xyToRf(x, y);
        id = board[rf];
        sqrList.push(id);
        [x, y] = takeStep(x, y);
    }
    return sqrList;
}

// module.exports = getPath;

/** for node.js
if (require.main === module) {

    // imports 
    import {printBoard} from "../printers/printBoard";
    import {getRfsFromIds} from "../helpers/getRfsFromIds";
    
    let board = sampleBoardDicts["check_example3"];
    var path;

    // test 1, 90 degrees
    sqrList = getPath(board, 4, 4, step_1sqr90d);
    path = getRfsFromIds(board, sqrList)
    printBoard(board, '\ntest 1, 90', path, ["d4"])
    console.log("\n");

    // test 2, 45 degrees
    sqrList = getPath(board, 4, 4, step_1sqr45d);
    path = getRfsFromIds(board, sqrList)
    printBoard(board, '\ntest 2, 45', path, ["d4"])
    console.log("\n");

    // test 3, 0 degrees
    sqrList = getPath(board, 4, 4, step_1sqr0d);
    path = getRfsFromIds(board, sqrList)
    printBoard(board, '\ntest 3, 0', path, ["d4"])
    console.log("\n");

    // test 4, 315 degrees
    sqrList = getPath(board, 4, 4, step_1sqr315d);
    path = getRfsFromIds(board, sqrList)
    printBoard(board, '\ntest 4, 315', path, ["d4"])
    console.log("\n");

    // test 5, 270 degrees
    sqrList = getPath(board, 4, 4, step_1sqr270d);
    path = getRfsFromIds(board, sqrList)
    printBoard(board, '\ntest 5, 270', path, ["d4"])
    console.log("\n");

    // test 6, 225 degrees
    sqrList = getPath(board, 4, 4, step_1sqr225d);
    path = getRfsFromIds(board, sqrList)
    printBoard(board, '\ntest 6, 225', path, ["d4"])
    console.log("\n");

    // test 7, 180 degrees
    sqrList = getPath(board, 4, 4, step_1sqr180d);
    path = getRfsFromIds(board, sqrList)
    printBoard(board, '\ntest 7, 180', path, ["d4"])
    console.log("\n");

    // test 8, 135 degrees
    sqrList = getPath(board, 4, 4, step_1sqr135d);
    path = getRfsFromIds(board, sqrList)
    printBoard(board, '\ntest 8, 135', path, ["d4"])
    console.log("\n");

}
*/