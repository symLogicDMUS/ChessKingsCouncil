import { isPiece } from "../pieceType/isPiece";
import { getColor } from "../color/getColor";

export function getResetPieceDicts(board, color) {
    /*create &&  return dicts for the initial ranges, pins, mt-restrictions &&  final ranges, of pieces on board**/

    const initRanges = {};
    const finalRanges = {};

    for (const id of Object.values(board)) {
        if (!isPiece(id)) {
            continue;
        }
        if (getColor(id) !== color) {
            continue;
        }
        initRanges[id] = [];
        finalRanges[id] = [];
    }

    return [initRanges, finalRanges];
}

// module.exports = getResetPieceDicts;

/*
if (require.main === module) {

    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts"
    
    var board = sampleBoardDicts['check_example3']
    var [iRanges, fRanges] = getResetPieceDicts(board, 'W')
    console.log('check_example3')
    console.log(iRanges)

    
    var board = sampleBoardDicts['knight_threat2']
    var [iRanges, fRanges] = getResetPieceDicts(board, 'W')
    console.log("knight_threat2")
    console.log(iRanges)
  

    var board = sampleBoardDicts['super_checkmate_impossible_example']
    var [iRanges, fRanges] = getResetPieceDicts(board, 'W')
    console.log("super_checkmate_impossible_example")
    console.log(iRanges)

}
*/
