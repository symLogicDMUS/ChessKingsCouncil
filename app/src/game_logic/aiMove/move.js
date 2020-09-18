import {ply} from "./ply";
import {enPassantMove} from "./enPassantMove";
import {castleMove} from "./castleMove";


export function move(responseBoard, start, dest, color, specialMoves) {
    var captured = null;
    [responseBoard, captured] = ply(responseBoard, start, dest)
    [responseBoard, captured] = castleMove(responseBoard, start, dest, specialMoves)
    [responseBoard, captured] = enPassantMove(responseBoard, start, dest, color, specialMoves)
    return [responseBoard, captured]
}