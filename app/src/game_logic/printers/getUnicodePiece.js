import {unicodePieces} from "../printers/unicodePieces";
import {getPieceType} from "../pieceType/getPieceType";
import {getColor} from "../color/getColor";


export function getUnicodePiece(id) {
    /*take a piece type || a piece id, &&  return a corresponding fen id**/
    let pieceType = getPieceType(id)
    let color = getColor(id)
    return unicodePieces[color][pieceType]
}

// module.exports = getUnicodePiece;