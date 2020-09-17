
import {getPieceType} from "./getPieceType";

export function getPieceTypes(board, pieceNames) {
    //filter out empty squares
    let piece_ids = Object.values(board).filter(sqr => {return sqr !== '#'} )
    let piece_types = piece_ids.map( id_ => getPieceType(id_, pieceNames));
    return piece_types;
}