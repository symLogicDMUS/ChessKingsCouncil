var  unicodePieces  = require("../printers/unicodePieces");
var  getPieceType  = require("../pieceType/getPieceType");
var  getColor  = require("../color/getColor");


function getUnicodePiece(id_) {
    /*take a piece type || a piece id, &&  return a corresponding fen id**/
    let pieceType = getPieceType(id_)
    let color = getColor(id_)
    return unicodePieces[color][pieceType]
}

module.exports = getUnicodePiece;