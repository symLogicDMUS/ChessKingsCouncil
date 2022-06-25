import { xyToRf } from "../../coordType/crdCnvrt";
import { printBoard } from "../../printers/printBoard";

export function setupBoard(board, posList) {
    /*fenParser task 7, for each new key, get the next the.includes(id) list**/
    let i = 0;
    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            board[xyToRf(x, y)] = posList[i];
            i += 1;
        }
    }
    return board;
}

// module.exports = setupBoard;

/** for node.js
if (require.main === module) {

    // test 1
    console.log("test 1:")
    let board = setupBoard(
    {"a1": '#', "a2": '#', "a3": '#', "a4": '#', "a5": '#', "a6": '#', 
     "a7": '#', "a8": '#', "b1": '#', "b2": '#', "b3": '#', "b4": '#', 
     "b5": '#', "b6": '#', "b7": '#', "b8": '#', "c1": '#', "c2": '#', 
     "c3": '#', "c4": '#', "c5": '#', "c6": '#', "c7": '#', "c8": '#', 
     "d1": '#', "d2": '#', "d3": '#', "d4": '#', "d5": '#', "d6": '#', 
     "d7": '#', "d8": '#', "e1": '#', "e2": '#', "e3": '#', "e4": '#', 
     "e5": '#', "e6": '#', "e7": '#', "e8": '#', "f1": '#', "f2": '#', 
     "f3": '#', "f4": '#', "f5": '#', "f6": '#', "f7": '#', "f8": '#', 
     "g1": '#', "g2": '#', "g3": '#', "g4": '#', "g5": '#', "g6": '#', 
     "g7": '#', "g8": '#', "h1": '#', "h2": '#', "h3": '#', "h4": '#', 
     "h5": '#', "h6": '#', "h7": '#', "h8": '#'},
     ['WR1', 'WN1', 'WB1', 'WQ1', 'WK1', 'WB2', 'WN2', 'WR2', 
      'WP1', 'WP2', 'WP3', 'WP4', 'WP5', 'WP6', 'WP7', 'WP8', 
      '#', '#', '#', '#', '#', '#', '#', '#', 
      '#', '#', '#', '#', '#', '#', '#', '#', 
      '#', '#', '#', '#', '#', '#', '#', '#', 
      '#', '#', '#', '#', '#', '#', '#', '#', 
      'BP1', 'BP2', 'BP3', 'BP4', 'BP5', 'BP6', 'BP7', 'BP8', 
      'BR1', 'BN1', 'BB1', 'BQ1', 'BK1', 'BB2', 'BN2', 'BR2'])
    printBoard(board)
    console.log("\n")


    // test 2
    console.log("test 2:")
    board = setupBoard(
    {"a1": '#', "a2": '#', "a3": '#', "a4": '#', "a5": '#', "a6": '#', 
     "a7": '#', "a8": '#', "b1": '#', "b2": '#', "b3": '#', "b4": '#', 
     "b5": '#', "b6": '#', "b7": '#', "b8": '#', "c1": '#', "c2": '#', 
     "c3": '#', "c4": '#', "c5": '#', "c6": '#', "c7": '#', "c8": '#', 
     "d1": '#', "d2": '#', "d3": '#', "d4": '#', "d5": '#', "d6": '#', 
     "d7": '#', "d8": '#', "e1": '#', "e2": '#', "e3": '#', "e4": '#', 
     "e5": '#', "e6": '#', "e7": '#', "e8": '#', "f1": '#', "f2": '#', 
     "f3": '#', "f4": '#', "f5": '#', "f6": '#', "f7": '#', "f8": '#', 
     "g1": '#', "g2": '#', "g3": '#', "g4": '#', "g5": '#', "g6": '#', 
     "g7": '#', "g8": '#', "h1": '#', "h2": '#', "h3": '#', "h4": '#', 
     "h5": '#', "h6": '#', "h7": '#', "h8": '#'},
    ['#', 'WR1', 'WB1', 'WR2', 'WK1', '#', '#', '#', 
     '#', '#', '#', '#', '#', '#', '#', '#', 
    'WR3', 'WN1', 'WB2', 'WQ1', '#', 'WB3', 'WN2', 'WR4', 
    '#', '#', '#', '#', '#', '#', '#', '#', 
    'BR1', 'BN1', 'BB1', 'BQ1', '#', 'BB2', 'BN2', 'BR2', 
    '#', '#', '#', 'BK1', '#', '#', '#', '#', 
    '#', '#', '#', '#', '#', '#', '#', '#', 
    '#', '#', '#', '#', '#', '#', '#', '#'])
    printBoard(board)
    console.log("\n")


    // test 3
    console.log("test 3:")
    board =
    setupBoard(
    {"a1": '#', "a2": '#', "a3": '#', "a4": '#', "a5": '#', "a6": '#', 
     "a7": '#', "a8": '#', "b1": '#', "b2": '#', "b3": '#', "b4": '#', 
     "b5": '#', "b6": '#', "b7": '#', "b8": '#', "c1": '#', "c2": '#', 
     "c3": '#', "c4": '#', "c5": '#', "c6": '#', "c7": '#', "c8": '#', 
     "d1": '#', "d2": '#', "d3": '#', "d4": '#', "d5": '#', "d6": '#', 
     "d7": '#', "d8": '#', "e1": '#', "e2": '#', "e3": '#', "e4": '#', 
     "e5": '#', "e6": '#', "e7": '#', "e8": '#', "f1": '#', "f2": '#', 
     "f3": '#', "f4": '#', "f5": '#', "f6": '#', "f7": '#', "f8": '#', 
     "g1": '#', "g2": '#', "g3": '#', "g4": '#', "g5": '#', "g6": '#', 
     "g7": '#', "g8": '#', "h1": '#', "h2": '#', "h3": '#', "h4": '#', 
     "h5": '#', "h6": '#', "h7": '#', "h8": '#'},
    ['BB1', '#', '#', 'BQ1', '#', '#', 'BQ2', '#', '#', '#', '#', 'WR1', '#', 
     'WR2', '#', '#', '#', '#', 'WN1', 'WP1', '#', '#', '#', '#', 'BQ3', '#', 
     'WQ1', 'WK1', '#', 'WQ2', 'WB1', 'BR1', '#', '#', '#', '#', '#', '#', '#', 
     '#', '#', '#', '#', 'WP2', '#', 'WP3', '#', '#', 'BQ4', '#', '#', 'BR2', 
     '#', '#', 'WP4', '#', '#', '#', '#', 'BK1', '#', '#', '#', 'BB2'])
    console.log(board)
    console.log("\n")

}
*/