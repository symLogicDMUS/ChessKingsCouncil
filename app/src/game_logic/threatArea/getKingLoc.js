import { rfToXy } from "../coordType/crdCnvrt";
import { getPieceType } from "../pieceType/getPieceType";
import { getColor } from "../color/getColor";

export function getKingLoc(board, color) {
    /*get the location of the king of given color NOTE: in the modified chess can return list instead of single item**/
    var locs = Object.keys(board).filter(
        (s) => getPieceType(board[s]) === "K" && getColor(board[s]) === color
    );
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
