import {getHypoBoard} from "./getHypoBoard";
import {printBoard} from "../printers/printBoard";
import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
import {xyToRf} from "../coordType/crdCnvrt"

export function getHypoBoards(board, kingLoc, initRange, color) {
    /**
    get one dict of boards, where each board the king has moved to a its.includes(square) initial range. The key is the location
    the king moved to for that board.
    */
    var boards = {}
    for (var dest of initRange) {
        boards[xyToRf(...dest)] = getHypoBoard(board, kingLoc, dest)
    }
    return boards
}

// module.exports = getHypoBoards;

/** for node.js
if (require.main === module) {
    console.log("super_checkmate_impossible_example")
    board = sampleBoardDicts['super_checkmate_impossible_example']
    hypoBoards = getHypoBoards(board, [6, 6], [[5, 5], [6, 5], [7, 5], [5, 6], [7, 6], [5, 7], [6, 7], [7, 7]], "W")

    for (var board_ of Object.values(hypoBoards)) {
        printBoard(board_, "\n", ["f6"], null, )
    }


}
*/