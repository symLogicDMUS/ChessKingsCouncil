import {mapListXyToRf} from "../../coordType/mapListXyToRf";
import {step_1sqr45d, step_1sqr135d, step_1sqr315d, step_1sqr225d} from "../../helpers/stepFuncs";


export function getPotentialCaptures(sqr, color) {
    /*get the squares that the pawn of given color at sqr could potentially move to capture a piece**/
    var potentialPawnCaptures = []
    if (color === 'W') {
        potentialPawnCaptures.push(step_1sqr45d(...sqr))
        potentialPawnCaptures.push(step_1sqr135d(...sqr))
    }
    else if (color === 'B') {
        potentialPawnCaptures.push(step_1sqr225d(...sqr))
        potentialPawnCaptures.push(step_1sqr315d(...sqr))
    }
    else {
        console.log('error: invalid color!')
    }
    return potentialPawnCaptures
}

// module.exports = getPotentialCaptures;

/** for node.js
if (require.main === module) {
    
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {printBoard} from "../../printers/printBoard";

    let board = sampleBoardDicts["pawn_range"]
    
     // test 1, b4 pawn:
    console.log('test 1: b4 pawn')
    potentialPawnCaptures = getPotentialCaptures([2, 4], 'W')
    //console.log(potentialPawnCaptures)
    printBoard(board, null, mapListXyToRf(potentialPawnCaptures), null, ["b4"])
    console.log('\n')

}
*/