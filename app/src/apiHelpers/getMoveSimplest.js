import { flipKeysValues } from "../Components/helpers/flipKeysValues";
import {sampleBoardDicts} from "../game_logic/testObjects/sampleBoardDicts";
import {shuffle} from "../Components/helpers/shuffleArray";


export function getMoveSimplest(responseBoard, pieceId, ranges) {
    /*dummest possible AI for picking a move. Picks a random move from the range of pieceId**/
    // https://stackoverflow.com/questions/483666/reverse-invert-a-dictionary-mapping
    var pieceDict = flipKeysValues(responseBoard)
    ranges[pieceId] = shuffle(ranges[pieceId])
    var start = pieceDict[pieceId]
    var dest = ranges[pieceId][0]
    return [start, dest]
}



/** for node.js
if (require.main === module) {
    let ranges = {
              'BB1': [],
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
              'BR2': [] }

    console.log(getMoveSimplest(sampleBoardDicts['singleMove'], 'BP5', ranges))
}
*/

