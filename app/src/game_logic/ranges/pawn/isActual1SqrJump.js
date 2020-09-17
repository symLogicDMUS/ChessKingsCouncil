import {getSqrCase} from "../../sqrCase/getSqrCase";
import {EMPTY} from "../../sqrCase/sqrCases";
import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";


export function isActual1SqrJump(board, potentialJump, color) {
    /*if potentialJump is empty sqr return true, else return false**/
    if (getSqrCase(board, potentialJump[0], potentialJump[1], color) === EMPTY) {
        return true
    }
    else {
        return false
    }
}

// module.exports = isActual1SqrJump;

/** for node.js
if (require.main === module) {

    import {printBoard} from "../../printers/printBoard";

    var board = sampleBoardDicts["pawn_range"];
    
    //b5, white
    if (isActual1SqrJump(board, [2, 5], 'W'))
        printBoard(board, "\ngreen: yes, red: no", null, ["b5"], null, ["b4"])
    else
        printBoard(board, "\ngreen: yes, red: no", ["b5"], null, null, ["b4"])

    //b5, white
    if (isActual1SqrJump(board, [3, 5], 'W'))
        printBoard(board, "\ngreen: yes, red: no", null, ["c5"], null, ["c4"])
    else
        printBoard(board, "\ngreen: yes, red: no", ["c5"], null, null, ["c4"])

    //e5, white
    if (isActual1SqrJump(board, [5, 5], 'W'))
        printBoard(board, "\ngreen: yes, red: no", null, ["e5"], null, ["e4"])
    else
        printBoard(board, "\ngreen: yes, red: no", ["e5"], null, null, ["e4"])

    //a3, white
    if (isActual1SqrJump(board, [1, 3], 'W'))
        printBoard(board, "\ngreen: yes, red: no", null, ["a3"], null, ["a2"])
    else
        printBoard(board, "\ngreen: yes, red: no", ["a3"], null, null, ["a2"])

}
*/