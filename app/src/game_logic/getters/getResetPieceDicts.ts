import { isPiece } from "../pieceType/isPiece";
import { getColor } from "../color/getColor";
import Board from "../types/Board";
import Color from "../types/Color";
import Range from "../types/Range";

export function getResetPieceDicts(board: Board, color: Color) {
    /*create &&  return dicts for the initial ranges, pins, mt-restrictions &&  final ranges, of pieces on board**/

    const initRanges = {};
    const pins = {};
    const mtRestricts = {};
    const finalRanges = {};

    for (const id of Object.values(board)) {
        if (!isPiece(id)) {
            continue;
        }
        if (getColor(id) !== color) {
            continue;
        }
        initRanges[id] = <Range>[];
        pins[id] = <Range>[];
        mtRestricts[id] = <Range>[];
        finalRanges[id] = <Range>[];
    }

    return [initRanges, pins, mtRestricts, finalRanges];
}

// module.exports = getResetPieceDicts;

/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts"
    
    var board = sampleBoardDicts['check_example3']
    var [iRanges, pins, mtRes, fRanges] = getResetPieceDicts(board, 'W')
    console.log('check_example3')
    console.log(iRanges)

    
    var board = sampleBoardDicts['knight_threat2']
    var [iRanges, pins, mtRes, fRanges] = getResetPieceDicts(board, 'W')
    console.log("knight_threat2")
    console.log(iRanges)
  

    var board = sampleBoardDicts['super_checkmate_impossible_example']
    var [iRanges, pins, mtRes, fRanges] = getResetPieceDicts(board, 'W')
    console.log("super_checkmate_impossible_example")
    console.log(iRanges)

}
*/
