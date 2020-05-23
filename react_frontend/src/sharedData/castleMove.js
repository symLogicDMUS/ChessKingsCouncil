import { getRookStartAndDest } from "./getRookStartAndDest";
import { ply } from "./ply";

export function castleMove(chess, start, dest) {
    /**if castle move, then move the rook as part of castle
    parameters
    ..........
    start: tuple
    dest: tuple
    specialMoves: class specialMoves
    ..........
    note: 1 structure for ranges & pieces. Were seperate in earlier versions
    */
   let move = [start, dest]
    if (! chess.specialMoves.isCastle(move)) {
        return
    }
    var [rStart, rDest] = getRookStartAndDest(dest)
    ply(chess, rStart, rDest)
}