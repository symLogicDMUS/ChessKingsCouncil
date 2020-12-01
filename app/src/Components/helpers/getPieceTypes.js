import {getPieceType} from "./getPieceType";

export function getPieceTypes(board) {
    //filter out empty squares
    const pieceIds = Object.values(board).filter(sqr => {
        return sqr !== '#'
    });
    return pieceIds.map(id => getPieceType(id))
}