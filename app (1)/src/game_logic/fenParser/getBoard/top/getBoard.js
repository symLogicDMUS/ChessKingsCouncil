import {getPosStr} from "../getPosStr";
import {getTravStr} from "../getTravStr";
import {numToSharps} from "../numToSharps";
import {posStrToList} from "../posStrToList";
import {convertIds} from "../convertId";
import {addDigitToId} from "../addDigitToId";
import {initBoard} from "../initBoard";
import {setupBoard} from "../setupBoard";
import {printBoard} from "../../../printers/printBoard";


export function getBoard(fen) {
    /*takes a fen string as input, &&  returns a board dict **/
    let str = getPosStr(fen)
    str = getTravStr(str)
    str = numToSharps(str)
    let list = posStrToList(str)
    list = convertIds(list)
    list = addDigitToId(list)
    var board = initBoard()
    board = setupBoard(board, list)
    return board
}

// module.exports = getBoard;

/** for node.js
if (require.main === module) {
    // test 1
    console.log('test 1:')
    board = getBoard('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 2, rangesTest:
    console.log('test 2:')
    board = getBoard('8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3 w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log("\n")

    // test 3, checkExample3:
    console.log('test 3:')
    board = getBoard('3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1 w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log("\n")
    
    // test 4, knightThreat1:
    console.log('test 4:')
    board = getBoard('r4rk1/1pp1qppp/3bbn2/pP1pp3/4P3/2NBBN2/P1n1QPPP/R3K2R w KQ a6 0 10')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 5, pawnThreat1:
    console.log('test 5:')
    board = getBoard('rnbq1bnr/8/8/2k5/1P4p1/5K2/8/RNBQ1BNR w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 6:
    console.log('test 6:')
    board = getBoard('5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 7, middleCluster:
    console.log('test 7:')
    board = getBoard('8/8/3Qq3/2RbBr2/3Nn3/3kK3/8/8 w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 8:
    console.log('test 8:')
    board = getBoard('8/8/8/3k4/5KkK/2k4K/5pKK/8 w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 9:
    console.log('test 9:')
    board = getBoard('r3k2r/2P5/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R w KQkq - 1 25')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 10, castleTest1:
    console.log('test 10, castleTest1:')
    board = getBoard('r3k2r/1P6/5P2/p3n2p/3b1BpP/NBQb1q2/8/R3K2R w KQkq - 1 25')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 11, castleTest2:
    console.log('test 11, castleTest2:')
    board = getBoard('1q2k3/8/8/8/8/8/8/R3K2R w K - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 12, castleTest3:
    console.log('test 12, castleTest3:')
    board = getBoard('r3k2r/3q4/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/3Q4/R3K2R w KQkq - 8 13')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 13, castleTest4:
    console.log('test 13, castleTest4:')
    board = getBoard('r2qk2r/8/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/8/R2QK2R w KQkq - 8 13')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 14:
    console.log('test 14:')
    board = getBoard('r3k2r/8/8/8/8/8/8/R3K2R w KQkq - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 15, pawnRange:
    console.log('test 15, pawnRange')
    board = getBoard('r1bqkbnr/p1p2pp1/1p6/n2pp1Pp/1PP1P3/N7/P2P1P1P/R1BQKBNR w KQkq h6 0 7')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 16, enPassant test 1:
    console.log('test 16, enPassant test 1:')
    board = getBoard('rnbqkb1r/p1pppppp/5n2/1pP5/8/8/PP1PPPPP/RNBQKBNR w KQkq b6 0 3')
    console.log(board)
    printBoard(board)
    console.log('\n')
    // test 17, kingRangeTest:
    console.log('test 17, kingRangeTest:')
    board = getBoard('4k3/6pp/8/8/3Pp3/2bK4/4B3/8 w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')
    // test 18, checkExample_3
    console.log('test 18, checkExample_3')
    board = getBoard('3k3b/q2r2P1/3P1P2/8/q1QK1QBr/2NP4/3R1R2/b2q2q1 w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 19, pawnPromo
    console.log('test 19, pawn promo')
    board = getBoard('r1bqkbnr/1P1p2p1/2n5/4pp1p/P3P1P1/N3B3/2p2P1P/R2QKBNR b KQkq - 1 11')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 20, superCheckmateImpossibleExample
    console.log('test 20, superCheckmateImpossibleExample')
    board = getBoard('5rk1/3np1p1/r4K2/8/7b/8/8/q4r2 w - - 0 1')
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 21, checkExample1
    console.log('test 21, checkExample1')
    board = getBoard("1n5r/8/6N1/3pK3/2k1P3/7q/1nb5/3r1B1R w - - 0 1")
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 22, knightThreat2
    console.log('test 22, knightThreat2')
    board = getBoard("r4rk1/1pp1Nppp/3bbn1N/pP1pp3/4P3/3NBn2/P1n1QPNP/R3K2R w KQ a6 0 10")
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 23, en-passant-test
    console.log('test 21, en-passant-test')
    board = getBoard("rnbqkb1r/1p1ppppp/5n2/pPp5/8/8/PBPPPPPP/RN1QKBNR w KQkq - 0 4")
    console.log(board)
    printBoard(board)
    console.log('\n')

    // test 24
    console.log('test 24')
    board = getBoard("rnbqkbnr/8/8/pppppppp/PPPPPPPP/8/8/RNBQKBNR w KQkq - 0 1")
    console.log(board)
    printBoard(board)
    console.log('\n')

}
*/


