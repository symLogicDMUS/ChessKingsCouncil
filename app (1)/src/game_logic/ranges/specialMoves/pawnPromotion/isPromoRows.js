import {getPieceType} from "../../../pieceType/getPieceType";
import {getColor} from "../../../color/getColor";
import { xyToRf } from "../../../coordType/crdCnvrt";


export function isPromoRows(start, dest, id) {
    /**return true if start &&  dest are potential alignment of a pawn promotion &&  id is a pawn, else false
        isPromo is ! concerned doing any filtering that is the job of the range
    */
    if (getPieceType(id) === 'P' &&  getColor(id) === 'W' &&  start[1] === 7 &&  dest[1] === 8) {
        return true
    }
    else if (getPieceType(id) === 'P' &&  getColor(id) === 'B' &&  start[1] === 2 &&  dest[1] === 1) {
        return true
    }
    else {
        return false
    }
}

// module.exports = isPromoRows;

/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../../../testObjects/sampleBoardDicts";
    import {printBoard} from "../../../printers/printBoard";

    var board = sampleBoardDicts["pawnPromo"];
    var id;
    
    for (var y1 = 8; y1 > 0; y1--) {
        for (let x1 = 1; x1 < 9 ; x1++) {
            id = board[xyToRf(x1, y1)]
            for (var y2 = 8; y2 > 0; y2--) {
                for (let x2 = 1; x2 < 9 ; x2++) {
                    if (isPromoRows([x1, y1], [x2, y2], id)) {
                        printBoard(board, null, [xyToRf(...[x2, y2])], null, [xyToRf(...[x1, y1])])
                    }
                }
            }
        }
    }

}
*/