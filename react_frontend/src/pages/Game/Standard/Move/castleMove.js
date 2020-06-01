import { getRookStartAndDest } from "../sharedData/getRookStartAndDest";
import { ply } from "./ply";

export function castleMove(data, start, dest) {
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
    if (! data.specialMoves.isCastle(move)) {
        return
    }
    var [rStart, rDest] = getRookStartAndDest(dest)
    ply(data, rStart, rDest)
}