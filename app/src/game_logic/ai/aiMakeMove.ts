import { aiPly } from "./aiPly";
import { aiEnPassantMove } from "./aiEnPassantMove";
import { aiCastleMove } from "./aiCastleMove";
import Board from "../types/Board";
import Rankfile from "../types/Rankfile";
import Color from "../types/Color";
export function aiMakeMove(responseBoard: Board, start: Rankfile, dest: Rankfile, color: Color, specialMoves) {
    let captured: Rankfile | null;
    [responseBoard, captured] =
        aiPly(responseBoard, start, dest)
    // @ts-ignore
    [responseBoard, captured] =
        aiCastleMove(responseBoard, start, dest, specialMoves)
    // @ts-ignore
    [responseBoard, captured] =
            aiEnPassantMove(responseBoard, start, dest, color, specialMoves);
    return [responseBoard, captured];
}
