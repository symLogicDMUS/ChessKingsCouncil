import {getPieceType} from "../pieceType/getPieceType";
import {getColor} from "../color/getColor";
import {rfToXy} from "../coordType/crdCnvrt";
import {getResetPieceDicts} from "../getters/getResetPieceDicts";


export function getMultithreatRestriction(board, numPiecesCheckingKing, color) {
    /**
    if there is more than 1 piece checking the king then each piece of color will be restricted to the square it's
    currently on, otherwise no multi-threat restriction so each piece gets all 64 coordinates
    */

    var multithreatRestriction = {}

    if (numPiecesCheckingKing > 1) {

        for (var [rf, id] of Object.entries(board)) {

            if (id === '#') {
                continue
            }
            if (getColor(id) != color) {
                continue
            }
            if (getPieceType(id) === 'K') {
                continue
            }

            multithreatRestriction[id] = [rfToXy(rf)]
        }

    }

    else {
        for (var [rf, id] of Object.entries(board)) {

            if (id === '#') {
                continue
            }
            if (getColor(id) != color) {
                continue
            }
            if (getPieceType(id) === 'K') {
                continue
            }

            multithreatRestriction[id] = []

        }
    }

    return multithreatRestriction;
}

// module.exports = getMultithreatRestriction;


/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {printBoard} from "../printers/printBoard";

    var board = {}

    board = sampleBoardDicts['check_example3']
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
    multithreatRestriction = getMultithreatRestriction(board, 1, 'W')
    printBoard(board, '\ncheck_example3, 1 piece checking king')
    console.log(multithreatRestriction)

    board = sampleBoardDicts['knight_threat2']
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
    multithreatRestriction = getMultithreatRestriction(board, 2, 'W')
    printBoard(board, '\nknight_threat2, 2 pieces checking king')
    console.log(multithreatRestriction)

    board = sampleBoardDicts['super_checkmate_impossible_example']
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, 'W')
    multithreatRestriction = getMultithreatRestriction(board, 8, 'W')
    printBoard(board, '\nsuper_checkmate_impossible_example, 8 pieces checking king')
    console.log(multithreatRestriction)

}
*/