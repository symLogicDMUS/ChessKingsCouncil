import { getPotentialPawnThreats } from "./getPotentialPawnThreats";
import { getActualPawnThreats } from "./getActualPawnThreats";
import { mapListRfToXy } from "../coordType/mapListRfToXy";
import Color from "../types/Color";
import XY from "../types/XY";
import Board from "../types/Board";

export function getPawnThreats(board: Board, sqr: XY, color: Color) {
    /*return list of squares containing a pawn putting the check.includes(king)**/
    const potentialPawnThreats = getPotentialPawnThreats(board, sqr, color);
    const actualPawnThreats = getActualPawnThreats(
        board,
        mapListRfToXy(potentialPawnThreats),
        color
    );
    return actualPawnThreats;
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
