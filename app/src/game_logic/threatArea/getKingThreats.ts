import { getSqrCase } from "../sqrCase/getSqrCase";
import { ENEMY } from "../sqrCase/sqrCases";
import { dist } from "../helpers/formulas";
import { xyToRf, rfToXy } from "../coordType/crdCnvrt";
import { mapListRfToXy } from "../coordType/mapListRfToXy";
import Rankfile from "../types/Rankfile";
import Board from "../types/Board";
import Color from "../types/Color";
import XY from "../types/XY";
import Rank from "../types/Rank";

export function getKingThreats(board: Board, sqr: XY, color: Color) {
    /*for a square not containing the king, get list of kings threatening that square**/
    let sqrXY: XY;
    const kingThreats = Object.keys(board).filter((sqrRf: Rankfile) => {
        sqrXY = rfToXy(sqrRf);
        if (
            (dist(sqr, sqrXY) === 1 || dist(sqr, sqrXY) === Math.sqrt(2)) &&
            getSqrCase(board, sqrXY[0], sqrXY[1], color) === ENEMY &&
            board[xyToRf(...sqrXY)][1] === "K"
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
    printBoard(board, "hover-off", mapListXyToRf(getKingThreats(board, [4, 4], 'W')), ["d4"])
    console.log('\n')
    
    // test 2:
    console.log('test 2:')
    printBoard(board, "black", mapListXyToRf(getKingThreats(board, [6, 3], 'B')), ["f3"])
    console.log('\n')

}
*/
