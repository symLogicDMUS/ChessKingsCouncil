import {getPieceType} from "./getPieceType";


export function getPieceTypeInstances(board) {
    /*get the type of piece of every piece instance on board. sort alphabetically &&  return**/
    let pieceIds = Object.values(board).filter(id => id !== '#')
    let pieceTypes = pieceIds.map(id => getPieceType(id))
    pieceTypes.sort();
    return pieceTypes
}
    
// module.exports = getPieceTypes;