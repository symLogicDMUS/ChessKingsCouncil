import {isPiece} from "../pieceType/isPiece";
import {getColor} from "../color/getColor";


export function getResetPieceDicts(board, color) {
    /*create &&  return dicts for the initial ranges, pins, mt-restrictions &&  final ranges, of pieces on board**/
    
    var initRanges = {}
    var pins = {}
    var mtRestricts = {}
    var finalRanges = {}
    
    for (var id of Object.values(board)) {
        if (! isPiece(id)) {
            continue
        }
        if (getColor(id) != color) {
            continue
        }
        initRanges[id] = []
        pins[id] = []
        mtRestricts[id] = []
        finalRanges[id] = []
    }
    
    return [initRanges, pins, mtRestricts, finalRanges]
}

// module.exports = getResetPieceDicts;

/** for node.js
if (require.main === module) {

    /**Note: are identical at this point (the start) so only need print 1 */

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

/**
 * check_example3
{
  WR1: [],
  WR2: [],
  WN1: [],
  WP1: [],
  WQ1: [],
  WK1: [],
  WQ2: [],
  WB1: [],
  WP2: [],
  WP3: [],
  WP4: []
}
knight_threat2
{
  WR1: [],
  WK1: [],
  WR2: [],
  WP1: [],
  WQ1: [],
  WP2: [],
  WN1: [],
  WP3: [],
  WN2: [],
  WB1: [],
  WP4: [],
  WP5: [],
  WN3: [],
  WN4: []

}
*/
super_checkmate_impossible_example
{ WK1: [] }
 */