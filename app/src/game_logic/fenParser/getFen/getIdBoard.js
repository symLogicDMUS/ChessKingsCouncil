import {getDigits} from "./getDigits"
import {xyToRf} from "../../coordType/crdCnvrt"


export function getIdBoard(board) {
    /*getFen TASK 1, takes board as input, &&  return board as list of lists where each list is a row**/
    let idBoard = []
    let row = []
    for (let y = 1; y < 9 ; y++) {
        for (let x = 1; x < 9 ; x++) {
            row.push(board[xyToRf(x, y)])
        }
        idBoard.unshift(row)
        row = []
    }
    return idBoard
}

// module.exports = getIdBoard;

/** for node.js
if (require.main === module) {
    console.log('test 1:')
    // starting fen, rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
    let board =
    {"a1": 'WR1', "a2": 'WP1', "a3": '#', "a4": '#', "a5": '#', "a6": '#', "a7": 'BP1', "a8": 'BR1', 
    "b1": 'WN1', "b2": 'WP2', "b3": '#', "b4": '#', "b5": '#', "b6": '#', "b7": 'BP2', "b8": 'BN1', 
    "c1": 'WB1', "c2": 'WP3', "c3": '#', "c4": '#', "c5": '#', "c6": '#', "c7": 'BP3', "c8": 'BB1', 
    "d1": 'WQ1', "d2": 'WP4', "d3": '#', "d4": '#', "d5": '#', "d6": '#', "d7": 'BP4', "d8": 'BQ1', 
    "e1": 'WK1', "e2": 'WP5', "e3": '#', "e4": '#', "e5": '#', "e6": '#', "e7": 'BP5', "e8": 'BK1', 
    "f1": 'WB2', "f2": 'WP6', "f3": '#', "f4": '#', "f5": '#', "f6": '#', "f7": 'BP6', "f8": 'BB2', 
    "g1": 'WN2', "g2": 'WP7', "g3": '#', "g4": '#', "g5": '#', "g6": '#', "g7": 'BP7', "g8": 'BN2', 
    "h1": 'WR2', "h2": 'WP8', "h3": '#', "h4": '#', "h5": '#', "h6": '#', "h7": 'BP8', "h8": 'BR2'}
    idBoard = getIdBoard(board)
    for (var row of idBoard) {
        console.log(row)
    }
    console.log('\n')
    console.log('test 2:')
    // castleTest_3, r3k2r/3q4/2nbbn2/pppppppp/PPPPPPPP/2NBBN2/3Q4/R3K2R w KQkq - 8 13
    board =
    {"a1": 'WR1', "b1": '#', "c1": '#', "d1": '#', "e1": 'WK1', "f1": '#', "g1": '#', "h1": 'WR2', 
     "a2": '#', "b2": '#', "c2": '#', "d2": '#', "e2": '#', "f2": '#', "g2": '#', "h2": '#', 
     "a3": 'WN1', "b3": 'WB1', "c3": 'WQ1', "d3": 'BB1', "e3": '#', "f3": 'BQ1', "g3": '#', "h3": '#', 
     "a4": '#', "b4": '#', "c4": '#', "d4": 'BB2', "e4": '#', "f4": 'WB2', "g4": 'BP1', "h4": 'WP1', 
     "a5": 'BP2', "b5": '#', "c5": '#', "d5": '#', "e5": 'BN1', "f5": '#', "g5": '#', "h5": 'BP3', 
     "a6": '#', "b6": '#', "c6": '#', "d6": '#', "e6": '#', "f6": 'WP2', "g6": '#', "h6": '#', 
     "a7": '#', "b7": 'WP3', "c7": '#', "d7": '#', "e7": '#', "f7": '#', "g7": '#', "h7": '#', 
     "a8": 'BR1', "b8": '#', "c8": '#', "d8": '#', "e8": 'BK1', "f8": '#', "g8": '#', "h8": 'BR2'}
    idBoard = getIdBoard(board)
    for (var row of idBoard) {
        console.log(row)
    }
    console.log('\n')
    console.log('test 3:')
    board =
    {"a1": 'BB1', "a2": '#', "a3": '#', "a4": 'BQ3', "a5": '#', "a6": '#', "a7": 'BQ4', "a8": '#', 
    "b1": '#', "b2": '#', "b3": '#', "b4": '#', "b5": '#', "b6": '#', "b7": '#', "b8": '#', 
    "c1": '#', "c2": '#', "c3": 'WN1', "c4": 'WQ1', "c5": '#', "c6": '#', "c7": '#', "c8": '#', 
    "d1": 'BQ1', "d2": 'WR1', "d3": 'WP1', "d4": 'WK1', "d5": '#', "d6": 'WP2', "d7": 'BR2', "d8": 'BK1', 
    "e1": '#', "e2": '#', "e3": '#', "e4": '#', "e5": '#', "e6": '#', "e7": '#', "e8": '#', 
    "f1": '#', "f2": 'WR2', "f3": '#', "f4": 'WQ2', "f5": '#', "f6": 'WP3', "f7": '#', "f8": '#', 
    "g1": 'BQ2', "g2": '#', "g3": '#', "g4": 'WB1', "g5": '#', "g6": '#', "g7": 'WP4', "g8": '#', 
    "h1": '#', "h2": '#', "h3": '#', "h4": 'BR1', "h5": '#', "h6": '#', "h7": '#', "h8": 'BB2'}
    idBoard = getIdBoard(board)
    for (var row of idBoard) {
        console.log(row)
    }
    console.log('\n')
}
*/