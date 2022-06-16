import { aiPly } from "./aiPly";
import Board from "../types/Board";
import Rankfile from "../types/Rankfile";
import {rookStartAndDest} from "../ranges/specialMoves/castle/rookStartAndDest";

export function aiCastleMove(responseBoard: Board, start: Rankfile, dest: Rankfile, specialMoves): [Board, Rankfile | null] {
    let captured;
    if (!specialMoves.isCastle([start, dest])) {
        return [responseBoard, null];
    }
    const [rookStart, rookDest] = rookStartAndDest[dest];
    [responseBoard, captured] = aiPly(responseBoard, rookStart, rookDest);
    return [responseBoard, captured];
}
