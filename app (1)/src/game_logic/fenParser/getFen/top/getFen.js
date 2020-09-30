import {getIdBoard} from "../getIdBoard";
import {getPieceFens} from "../getPieceFens";
import {joinToRows} from "../joinToRows";
import {joinToFen} from "../joinToFen";
import {getDigits} from "../getDigits";


export function getFen(board) {
    /*convert a board dict to a fen position string &&  return**/
    let pos = getIdBoard(board);
    pos = getPieceFens(pos);
    pos = joinToRows(pos);
    pos = joinToFen(pos);
    pos = getDigits(pos);
    return pos;
}

// module.exports = getFen;


/** for node.js
if (require.main === module) {
    // test #1, starting fen, rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
    console.log('test 1:')
    let board = sampleBoardDicts['new']
    console.log(getFen(board))
    console.log('\n')
    // test #2, castleTest3, r3k2r/3q4/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/3Q4/R3K2R w KQkq - 8 13
    console.log('test 2:')
    board = sampleBoardDicts['castle_test3']
    console.log(getFen(board))
    console.log('\n')
    // test #3, castleTest1, r3k2r/1P6/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R
    console.log('test 3:')
    board = sampleBoardDicts['castle_test1']
    console.log(getFen(board))
    console.log('\n')
    // test #4, checkExample3, 3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1
    console.log('test 4:')
    board = sampleBoardDicts['check_example3']
    console.log(getFen(board))
    console.log('\n')
    // test 5, superCheckmateImpossibleExample, 5rk1/3np1p1/r4K2/8/7b/8/8/q4r2:
    console.log('test 5:')
    board = sampleBoardDicts['super_checkmate_impossible_example']
    console.log(getFen(board))
    console.log('\n')
    // test 6, rangesTest, 8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3 w - - 0 1
    console.log('test 6:')
    board = sampleBoardDicts['ranges_test']
    console.log(getFen(board))
    console.log('\n')

}
*/
