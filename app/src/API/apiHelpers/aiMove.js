import { getMoveSimplest } from "./getMoveSimplest";
import { filterEmptyRanges } from "./filterEmpyRanges";
import { aiMakeMove } from "../../game_logic/ai/aiMakeMove";
import { shuffle } from "../../Components/helpers/shuffleArray";
import { copy } from "../../Components/helpers/copy";

export function aiMove(board, ranges, color, specialMoves) {
    /* **/
    let captured;
    let responseBoard = copy(board);
    const aiRanges = filterEmptyRanges(ranges);
    const ids = shuffle(Object.keys(aiRanges));
    const pieceId = ids[0];
    const [start, dest] = getMoveSimplest(responseBoard, pieceId, aiRanges);
    [responseBoard, captured] = aiMakeMove(
        responseBoard,
        start,
        dest,
        color,
        specialMoves
    );
    return [captured, start, dest];
}

// module.exports = ai;

/** for node.js
if (require.main === module) {

    import {printBoard} from "../printers/printBoard";
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";

    ranges = {'BB1': [],
              'BB2': [],
              'BK1': [],
              'BN1': [[1, 6], [3, 6]],
              'BN2': [[6, 6], [8, 6]],
              'BP1': [[1, 6], [1, 5]],
              'BP2': [[2, 6], [2, 5]],
              'BP3': [[3, 6], [3, 5]],
              'BP4': [[4, 6], [4, 5]],
              'BP5': [[5, 6], [5, 5]],
              'BP6': [[6, 6], [6, 5]],
              'BP7': [[7, 6], [7, 5]],
              'BP8': [[8, 6], [8, 5]],
              'BQ1': [],
              'BR1': [],
              'BR2': []}
    [captured, start, dest] = ai(sampleBoardDicts['singleMove'], ranges, 'B', SpecialMoves())
    console.log([captured, start, dest])
    printBoard(sampleBoardDicts['singleMove'], highlights=[start, dest])

}
*/
