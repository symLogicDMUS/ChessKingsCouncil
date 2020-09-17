import {getMoveSimplest} from "./getMoveSimplest";
import {filterEmptyRanges} from "./filterEmpyRanges";
import {move} from "../Components/GameRoot/Move/move";
import {SpecialMoves} from "../ranges/specialMoves/SpecialMoves";
import {shuffle} from "../Components/helpers/shuffleArray"


export function aiMove(board, ranges, color, specialMoves) {
    /* **/
    var responseBoard = JSON.parse(JSON.stringify(board))
    var aiRanges = filterEmptyRanges(ranges)
    var ids = shuffle(Object.keys(aiRanges))
    var pieceId = ids[0]
    var [start, dest] = getMoveSimplest(responseBoard, pieceId, aiRanges)
    var [responseBoard, captured] = move(responseBoard, start, dest, color, specialMoves)
    
    if (captured === "undefined") {
        captured = false
    }

    return [captured, start, dest]
}

// module.exports = aiMove;

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
    [captured, start, dest] = aiMove(sampleBoardDicts['singleMove'], ranges, 'B', SpecialMoves())
    console.log([captured, start, dest])
    printBoard(sampleBoardDicts['singleMove'], highlights=[start, dest])

}
*/