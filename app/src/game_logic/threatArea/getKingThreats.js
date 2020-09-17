import {getSqrCase} from "../sqrCase/getSqrCase";
import {ENEMY} from "../sqrCase/sqrCases";
import {printBoard} from "../printers/printBoard";
import {dist} from "../helpers/formulas";
import {xyToRf, rfToXy} from "../coordType/crdCnvrt";
import {mapListRfToXy} from "../coordType/mapListRfToXy"
import {mapListXyToRf} from "../coordType/mapListXyToRf";


export function getKingThreats(board, sqr, color) {
    /*for a square ! containg the king, get list of kings threatening that square**/
    var kingThreats = Object.keys(board).filter(sqr2 => {

        sqr2 = rfToXy(sqr2)

        if ((dist(sqr, sqr2) === 1 || dist(sqr, sqr2) == Math.sqrt(2)) &&
            getSqrCase(board, sqr2[0], sqr2[1], color) === ENEMY &&
            board[xyToRf(...sqr2)][1] === "K"
        ) {
            return true;
        } else {
            return false;
        }

    });

    return mapListRfToXy(kingThreats);
}

// module.exports = getKingThreats;

/** for node.js
if (require.main === module) {
    
    let board =
        {"a1": '#', "b1": '#', "c1": '#', "d1": '#', "e1": '#', "f1": '#', "g1": '#', "h1": '#',
         "a2": '#', "b2": '#', "c2": '#', "d2": '#', "e2": '#', "f2": 'BP1', "g2": 'WK1', "h2": 'WK2',
         "a3": '#', "b3": '#', "c3": 'BK1', "d3": '#', "e3": '#', "f3": '#', "g3": '#', "h3": 'WK3',
         "a4": '#', "b4": '#', "c4": '#', "d4": '#', "e4": '#', "f4": 'WK4', "g4": 'BK2', "h4": 'WK5',
         "a5": '#', "b5": '#', "c5": '#', "d5": 'BK3', "e5": '#', "f5": '#', "g5": '#', "h5": '#',
         "a6": '#', "b6": '#', "c6": '#', "d6": '#', "e6": '#', "f6": '#', "g6": '#', "h6": '#',
         "a7": '#', "b7": '#', "c7": '#', "d7": '#', "e7": '#', "f7": '#', "g7": '#', "h7": '#',
         "a8": '#', "b8": '#', "c8": '#', "d8": '#', "e8": '#', "f8": '#', "g8": '#', "h8": '#'}
    
    // test 1:
    console.log('test 1:')
    printBoard(board, "white", mapListXyToRf(getKingThreats(board, [4, 4], 'W')), ["d4"])
    console.log('\n')
    
    // test 2:
    console.log('test 2:')
    printBoard(board, "black", mapListXyToRf(getKingThreats(board, [6, 3], 'B')), ["f3"])
    console.log('\n')

}
*/