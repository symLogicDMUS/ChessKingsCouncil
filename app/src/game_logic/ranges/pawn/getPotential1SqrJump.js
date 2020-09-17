import {step_1sqr90d, step_1sqr270d} from "../../helpers/stepFuncs";


export function getPotential1SqrJump(sqr, color) {
    /* get the potential 1 square move ahead, for the pawn at location sqr of given color**/
    if (color === 'W') {
        return step_1sqr90d(...sqr)
    }
    else if (color === 'B') {
        return step_1sqr270d(...sqr)
    }
}

// module.exports = getPotential1SqrJump;

/** for node.js
if (require.main === module) {
    
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {xyToRf} from "../../coordType/crdCnvrt"
    import {printBoard} from "../../printers/printBoard";

    var board = sampleBoardDicts["pawn_range"];
    var potential1SqrJumps = getPotential1SqrJump([2, 4], 'W')
    printBoard(board, null, [xyToRf(...potential1SqrJumps)], ["b4"])

}
*/