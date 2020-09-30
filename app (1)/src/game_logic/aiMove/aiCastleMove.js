import {aiPly} from "./aiPly";
import {getRookStartAndDest} from "../ranges/specialMoves/castle/getRookStartAndDest"


export function aiCastleMove(responseBoard, start, dest, specialMoves) {
    var captured;
    if (! specialMoves.isCastle([start, dest])) {
        return [responseBoard, null]
    }
    var [rookStart, rookDest] = getRookStartAndDest(dest)
    [responseBoard, captured] = aiPly(responseBoard, rookStart, rookDest)
    return [responseBoard, captured]
}