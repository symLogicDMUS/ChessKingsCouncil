import {aiPly} from "./aiPly";
import {aiEnPassantMove} from "./aiEnPassantMove";
import {aiCastleMove} from "./aiCastleMove";


export function aiMakeMove(responseBoard, start, dest, color, specialMoves) {
    var captured = null;
    [responseBoard, captured] = aiPly(responseBoard, start, dest)
    [responseBoard, captured] = aiCastleMove(responseBoard, start, dest, specialMoves)
    [responseBoard, captured] = aiEnPassantMove(responseBoard, start, dest, color, specialMoves)
    return [responseBoard, captured]
}