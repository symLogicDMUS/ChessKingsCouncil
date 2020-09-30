import {getUnicodePiece} from "../printers/getUnicodePiece";
import {checkerboard} from "../printers/checkerBoard";
import {isPiece} from "../pieceType/isPiece";
import {xyToRf} from "../coordType/crdCnvrt";
import colors from 'colors';


export function printBoard(board, heading, ...highlights) {
    /*print increasing.includes(boardDict) order of x, decreasing order of y (how 2d board normally displayed)
    the following are  
    highlights[0] will be printed as red
     higlights[1] will be brinted as green
     highlights[2] will be printed as blue
     highlights[3] will be printed as yellow
    **/
    if (heading)
        console.log(heading.red)
    var char, row;
    for (var y = 8; y > 0; y--) {
        row = y.toString();
        for (let x = 1; x < 9 ; x++) {
            if (isPiece(board[xyToRf(x, y)])) {
                char = getUnicodePiece(board[xyToRf(x, y)])
            }
            else {
                char = checkerboard[xyToRf(x, y)]
            }
            if (highlights[0] && highlights[0].includes(xyToRf(x, y))) {
                row = row + " " + char.red;
            }
            else if (highlights[1] && highlights[1].includes(xyToRf(x, y))) {
                row = row + " " + char.green;
            }
            else if (highlights[2] && highlights[2].includes(xyToRf(x, y))) {
                row = row + " " + char.blue;
            }
            else if (highlights[3] && highlights[3].includes(xyToRf(x, y))) {
                row = row + " " + char.yellow;
            }
            else {
                row = row + " " + char;
            }
        }
        console.log(row)
    }
    console.log("  a b c d e f g h")
}

// module.exports = printBoard;

/** for node.js
if (require.main === module) {

    printBoard(
        {"a1": 'WR1', "a2": 'WP1', "a3": '#', "a4": '#', "a5": '#', "a6": '#', "a7": 'BP1', "a8": 'BR1',
         "b1": 'WN1', "b2": 'WP2', "b3": '#', "b4": '#', "b5": '#', "b6": '#', "b7": 'BP2', "b8": 'BN1',
         "c1": 'WB1', "c2": 'WP3', "c3": '#', "c4": '#', "c5": '#', "c6": '#', "c7": 'BP3', "c8": 'BB1',
         "d1": 'WQ1', "d2": 'WP4', "d3": '#', "d4": '#', "d5": '#', "d6": '#', "d7": 'BP4', "d8": 'BQ1',
         "e1": 'WK1', "e2": 'WP5', "e3": '#', "e4": '#', "e5": '#', "e6": '#', "e7": 'BP5', "e8": 'BK1',
         "f1": 'WB2', "f2": 'WP6', "f3": '#', "f4": '#', "f5": '#', "f6": '#', "f7": 'BP6', "f8": 'BB2',
         "g1": 'WN2', "g2": 'WP7', "g3": '#', "g4": '#', "g5": '#', "g6": '#', "g7": 'BP7', "g8": 'BN2',
         "h1": 'WR2', "h2": 'WP8', "h3": '#', "h4": '#', "h5": '#', "h6": '#', "h7": 'BP8',
         "h8": 'BR2'},  "board 1", ["d2", "e2"])
    printBoard(
        {"a8": '#', "b8": '#', "c8": '#', "d8": '#', "e8": '#', "f8": 'BR3', "g8": 'BK1', "h8": '#',
         "a7": '#', "b7": '#', "c7": '#', "d7": 'BN1', "e7": 'BP1', "f7": '#', "g7": 'BP2', "h7": '#',
         "a6": 'BR2', "b6": '#', "c6": '#', "d6": '#', "e6": '#', "f6": 'WK1', "g6": '#', "h6": '#',
         "a5": '#', "b5": '#', "c5": '#', "d5": '#', "e5": '#', "f5": '#', "g5": '#', "h5": '#',
         "a4": '#', "b4": '#', "c4": '#', "d4": '#', "e4": '#', "f4": '#', "g4": '#', "h4": 'BB1',
         "a3": '#', "b3": '#', "c3": '#', "d3": '#', "e3": '#', "f3": '#', "g3": '#', "h3": '#',
         "a2": '#', "b2": '#', "c2": '#', "d2": '#', "e2": '#', "f2": '#', "g2": '#', "h2": '#',
         "a1": 'BQ1', "b1": '#', "c1": '#', "d1": '#', "e1": '#', "f1": 'BR1', "g1": '#', "h1": '#'}, "board 1", ["e7"])

}
*/