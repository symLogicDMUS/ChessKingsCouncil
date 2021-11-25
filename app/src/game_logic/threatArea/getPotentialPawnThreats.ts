import { rfToXy } from "../coordType/crdCnvrt";
import { dist } from "../helpers/formulas";
import Board from "../types/Board";
import Color from "../types/Color";
import XY from "../types/XY";
import Rankfile from "../types/Rankfile";

export function getPotentialPawnThreats(board: Board, sqr: XY, color: Color) {
    /* return list of locations that might be pawn attacking king **/

    let sqr2: XY;
    if (color === "W") {
        return Object.keys(board).filter((sqrRf: Rankfile) => {
            sqr2 = rfToXy(sqrRf);
            return sqr2[1] > sqr[1] && dist(sqr, sqr2) === Math.sqrt(2);
        });
    } else if (color === "B") {
        return Object.keys(board).filter((sqrRf: Rankfile) => {
            sqr2 = rfToXy(sqrRf);
            return sqr2[1] < sqr[1] && dist(sqr, sqr2) === Math.sqrt(2);
        });
    } else {
        console.log("error: color ! recognized\n");
        return -1;
    }
}

// module.exports = getPotentialPawnThreats;

/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {printBoard} from "../printers/printBoard";

    var board = sampleBoardDicts['pawn_threat1']
    
    // test 1:
    printBoard(board, "\nwhite", getPotentialPawnThreats(board, [6, 3], 'W'))
    console.log('\n')
    
    // test 2:
    printBoard(board, "\nblack", getPotentialPawnThreats(board, [3, 5], 'B'))

}
*/
