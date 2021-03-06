import {getPieceType} from "../../../pieceType/getPieceType";
import {getColor} from "../../../color/getColor";


export function getPawnIds(ranges, color) {
    return Object.keys(ranges).filter(id => getPieceType(id) === 'P' && getColor(id) === color)
}

// module.exports = getPawnIds;