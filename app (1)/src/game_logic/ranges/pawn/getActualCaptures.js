import {getSqrCase} from "../../sqrCase/getSqrCase";
import {ENEMY} from "../../sqrCase/sqrCases";



export function getActualCaptures(board, potentialPawnCaptures, color) {
    /*filter the list of potential pawn captures to get actual ones**/
    return potentialPawnCaptures.filter(sqr => getSqrCase(board, ...sqr, color) === ENEMY)
}

// module.exports = getActualCaptures;

/** for node.js
if (require.main === module) {
    
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {mapListXyToRf} from "../../coordType/mapListXyToRf"
    import {printBoard} from "../../printers/printBoard";

    var board = sampleBoardDicts["pawn_range"]
    
    // test 1, b4 pawn:
    let actualPawnCaptures = getActualCaptures(board, [[3, 5], [1, 5]], 'W')
    printBoard(board, '\ntest 1, b4 pawn', mapListXyToRf(actualPawnCaptures), null, ["b4"])
    console.log('\n');

}
*/