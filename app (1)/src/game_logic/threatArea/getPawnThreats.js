import {getPotentialPawnThreats} from "./getPotentialPawnThreats";
import {getActualPawnThreats} from "./getActualPawnThreats";
import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
import {mapListRfToXy} from "../coordType/mapListRfToXy";



export function getPawnThreats(board, sqr, color) {
    /*return list of squares containing a pawn putting the check.includes(king)**/
    var potentialPawnThreats = getPotentialPawnThreats(board, sqr, color)
    var actualPawnThreats = getActualPawnThreats(board, mapListRfToXy(potentialPawnThreats), color)
    return actualPawnThreats
}

// module.exports = getPawnThreats;

/** for node.js
if (require.main === module) {

    import {printBoard} from "../printers/printBoard";
    import {mapListXyToRf} from "../coordType/mapListXyToRf";
    
    var board = sampleBoardDicts['pawn_threat1'];

    mapListXyToRf(getPawnThreats(board, [6, 3], 'W'))
    mapListXyToRf(getPawnThreats(board, [3, 5], 'B'))

}
*/