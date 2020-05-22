import { getRookStartAndDest } from "./getRookStartAndDest";
import { ply } from "./ply";

export function castleMove(board, start, dest, specialMoves) {
    /**if castle move, then move the rook as part of castle
    parameters
    ..........
    start: tuple
    dest: tuple
    specialMoves: class specialMoves
    ..........
    note: 1 structure for ranges & pieces. Were seperate in earlier versions
    */
    if (! specialMoves.isCastle((start, dest))) {
        return [board, 'None']
    }
    var [rStart, rDest] = getRookStartAndDest(dest)
    var [board, captured] = ply(board, rStart, rDest)
    return [board, captured]
}


