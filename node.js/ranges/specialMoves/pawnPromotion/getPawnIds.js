const getPieceType = require("../../../pieceType/getPieceType");
const getColor = require("../../../color/getColor");


function getPawnIds(ranges, color) {
    var pawnIds = Object.keys(ranges).filter(id => getPieceType(id) === 'P' && getColor(id) === color)      
    return pawnIds
}

module.exports = getPawnIds;