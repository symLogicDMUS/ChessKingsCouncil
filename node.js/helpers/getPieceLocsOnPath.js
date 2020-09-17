const pieceDefs = require("../testObjects/standardPieceDefs");
const getPiecesOnPath = require("../pathsInfo/getPiecesOnPath");

function getPieceLocsOnPath (board, coordPath) {
    let pieceLocs = []
    for (var rf of coordPath) {
        if (board[rf] !== '#')
            pieceLocs.push(rf)
    }
    return pieceLocs;
}

module.exports = getPieceLocsOnPath;