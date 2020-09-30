import {getPieceType} from "../../../pieceType/getPieceType";
import {getColor} from "../../../color/getColor";


export function getPawnIds(ranges, color) {
    var pawnIds = Object.keys(ranges).filter(id => getPieceType(id) === 'P' && getColor(id) === color)      
    return pawnIds
}

// module.exports = getPawnIds;