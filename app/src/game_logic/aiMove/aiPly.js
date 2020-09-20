import {isPiece} from "../pieceType/isPiece"
import {xyToRf} from "../coordType/crdCnvrt";


export function aiPly(responseBoard, start, dest) {
    /**NOTE: start and dest now in rankfile form */
    var captured = null;
    if (start === dest) 
        return [responseBoard, null]
    if (isPiece(responseBoard[dest]))
        captured = responseBoard[dest]
    else
        captured = null;
    responseBoard[dest] = responseBoard[xyToRf(...start)]
    responseBoard[start] = '#'
    return [responseBoard, captured]
}

// module.exports = ply;