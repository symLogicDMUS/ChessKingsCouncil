import {ply} from "./ply";
import {getRookStartAndDest} from "../ranges/specialMoves/castle/getRookStartAndDest"


export function castleMove(responseBoard, start, dest, specialMoves) {
    var captured;
    if (! specialMoves.isCastle([start, dest])) {
        return [responseBoard, null]
    }
    var [rookStart, rookDest] = getRookStartAndDest(dest)
    [responseBoard, captured] = ply(responseBoard, rookStart, rookDest)
    return [responseBoard, captured]
}