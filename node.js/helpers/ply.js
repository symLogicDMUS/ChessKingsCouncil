const isPiece = require("../pieceType/isPiece")
const {xyToRf} = require("../coordType/crdCnvrt");


function ply(board, start, dest) {
    var captured;
    if (start.toString() === dest.toString()) 
        return [board, 'None']
    if (isPiece(board[xyToRf(...dest)]))
        captured = board[xyToRf(...dest)]
    else
        captured = 'None'
    board[xyToRf(...dest)] = board[xyToRf(...start)]
    board[xyToRf(...start)] = '#'
    return [board, captured]
}

module.exports = ply;