
import {getPieceType} from "./getPieceType";

export function getPieceTypes(board) {
    //filter out empty squares
    var pieceIds = Object.values(board).filter(sqr => {return sqr !== '#'} )
    var pieceTypes = pieceIds.map(id => getPieceType(id))
    return pieceTypes
}