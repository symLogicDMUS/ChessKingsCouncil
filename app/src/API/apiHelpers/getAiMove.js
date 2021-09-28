import { getMoveSimplest } from "./getMoveSimplest";
import { filterEmptyRanges } from "./filterEmpyRanges";
import { aiMakeMove } from "../../game_logic/ai/aiMakeMove";
import { shuffle } from "../../Components/helpers/shuffleArray";

export function getAiMove(board, ranges, color, specialMoves) {
    /* **/
    var responseBoard = JSON.parse(JSON.stringify(board));
    var aiRanges = filterEmptyRanges(ranges);
    var ids = shuffle(Object.keys(aiRanges));
    var pieceId = ids[0];
    var [start, dest] = getMoveSimplest(responseBoard, pieceId, aiRanges);
    var [responseBoard, captured] = aiMakeMove(
        responseBoard,
        start,
        dest,
        color,
        specialMoves
    );

    return [captured, start, dest];
}
