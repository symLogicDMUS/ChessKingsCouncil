import { getRookStartAndDest } from "../gameRootHelpers/getRookStartAndDest";
import { ply } from "./ply";

export function castleMove(gameroot, start, dest) {
    /**if castle move, then move the rook as part of castle
    parameters
    ..........
    start: tuple
    dest: tuple
    specialMoves: class specialMoves
    ..........
    note: 1 structure for ranges & pieces. Were seperate in earlier versions
    */
    
    if (! gameroot.specialMoves.isCastle([start, dest])) {
        return;
    }

    var [rStart, rDest] = getRookStartAndDest(dest);
    ply(gameroot, rStart, rDest);
    gameroot.specialMoves.removeCastle([start, dest]);
}