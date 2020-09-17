import {getSqrCase} from "../../sqrCase/getSqrCase";
import {OOB, EMPTY, FRIEND, ENEMY} from "../../sqrCase/sqrCases";


export function travelPath(board, x, y, color, sqrList, stepTaker) {
    /*travel the path adding squares to the list, then return the path. 
     * paths extend up to and including enemies, and up to and not including friends.
    **/
    let sqrCase = getSqrCase(board, x, y, color);
    
    if (sqrCase === OOB) {
        return sqrList;
    }

    else if (sqrCase === EMPTY) {
        sqrList.push([x, y]);
        [x, y] = stepTaker(x, y);
        sqrList = travelPath(board, x, y, color, sqrList, stepTaker);
    }

    else if (sqrCase === ENEMY) {
        sqrList.push([x, y]);
        return sqrList;
    }

    else if (sqrCase === FRIEND) {
        return sqrList;
    }

    else {
        console.log('error: square type ! recognized');
    }

    return sqrList;
}


export function getPath(sqr, board, color, takeStep) {
    /* **/
    var [x, y] = takeStep(...sqr)
    return travelPath(board, x, y, color, [], takeStep)
}

// module.exports = getPath;


/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {stepFuncList} from "../../helpers/stepFuncs";
    import {printBoard} from "../../printers/printBoard";
    import {mapListXyToRf} from "../../coordType/mapListXyToRf";
    import {xyToRf} from "../../coordType/crdCnvrt";

    var board = sampleBoardDicts["rangesTest"];
    var pathPieceLocs, path;
    
    //white pieces
    pathPieceLocs = [
        [1, 3],
        [2, 1],
        [3, 1],
        [3, 3],
        [4, 1],
        [4, 3],
        [6, 3],
        [8, 3],
        [8, 5],
    ];
    for (var sqr of pathPieceLocs) {
        for (var stepFunc of stepFuncList) {
            path = getPath(sqr, board, 'W', stepFunc)
            printBoard(board, `color: W, step func: ${stepFunc.name}`, mapListXyToRf(path), null, [xyToRf(...sqr)])
            console.log("")
        }
    }

    //black pieces
    pathPieceLocs = [
        [1, 5],
        [3, 5],
        [4, 5],
        [6, 5],
        [8, 5],
    ];
    for (var sqr of pathPieceLocs) {
        for (var stepFunc of stepFuncList) {
            path = getPath(sqr, board, 'B', stepFunc)
            printBoard(board, `color: B, step func: ${stepFunc.name}`, mapListXyToRf(path), null, [xyToRf(...sqr)])
            console.log("")
        }
    }
    console.log("\n\nNOTE: this method travels path from start square up to and including a".red)
    console.log("friendly piece, or not including an enemy piece. It does not consider".red)
    console.log("the ability of the piece at the starting square\n\n".red)

}
*/