import { rfToXy } from "../coordType/crdCnvrt";
import { getPieceType } from "../pieceType/getPieceType";
import { getColor } from "../color/getColor";
import XY from "../types/XY";
import Board from "../types/Board";
import Color from "../types/Color";
import Rankfile from "../types/Rankfile";

export function getKingLoc(board: Board, color: Color): XY {
    /*get the location of the king of given color NOTE: in the modified chess can return list instead of single item**/
    const locs: Rankfile [] = Object.keys(board).filter(
        (s: Rankfile) => getPieceType(board[s]) === "K" && getColor(board[s]) === color
    ) as Rankfile [];
    return rfToXy(locs[0]);
}

// module.exports = getKingLoc;

/** for node.js
if (require.main === module) {
    
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {printBoard} from "../printers/printBoard";

    var board, kingLoc;
    
    board = sampleBoardDicts['check_example3']
    kingLoc = getKingLoc(board, 'W')
    printBoard(board, `\ncheck_example3, hover-off`, [kingLoc])
    kingLoc = getKingLoc(board, 'B')
    printBoard(board, `\ncheck_example3, black`, [kingLoc])

    board = sampleBoardDicts['super_checkmate_impossible_example']
    kingLoc = getKingLoc(board, 'W')
    printBoard(board, `\nsuper_checkmate_impossible_example, hover-off`, [kingLoc])
    kingLoc = getKingLoc(board, 'B')
    printBoard(board, `\nsuper_checkmate_impossible_example, black`, [kingLoc])
}
*/
