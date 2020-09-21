import {getPieceFen} from "./getPieceFen";
import {isPiece} from "../../pieceType/isPiece";


export function getPieceFens(idList) {
    /*getFen TASK 2, for each idList.includes(id), if it is a piece id get its cooresponding fen**/
    for (let i = 0; i < idList.length; i++) {
        for (let j = 0; j < idList[i].length; j++) {
            if (isPiece(idList[i][j])) {
                idList[i][j] = getPieceFen(idList[i][j])
            }
        }
    }
    return idList
}

// module.exports = getPieceFens;

/** for node.js
if (require.main === module) {
    // test 1:
    console.log('test 1:')
    console.log(getPieceFens([
    ['BR1', 'BN1', 'BB1', 'BQ1', 'BK1', 'BB2', 'BN2', 'BR2'],
    ['BP1', 'BP2', 'BP3', 'BP4', 'BP5', 'BP6', 'BP7', 'BP8'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['WP1', 'WP2', 'WP3', 'WP4', 'WP5', 'WP6', 'WP7', 'WP8'],
    ['WR1', 'WN1', 'WB1', 'WQ1', 'WK1', 'WB2', 'WN2', 'WR2']]))
    console.log('\n')
    // test 2
    console.log('test 2:')
    console.log(getPieceFens([
    ['BR1', '#', '#', '#', 'BK1', '#', '#', 'BR2'],
    ['#', 'WP3', '#', '#', '#', '#', '#', '#'],
    ['#', '#', '#', '#', '#', 'WP2', '#', '#'],
    ['BP2', '#', '#', '#', 'BN1', '#', '#', 'BP3'],
    ['#', '#', '#', 'BB2', '#', 'WB2', 'BP1', 'WP1'],
    ['WN1', 'WB1', 'WQ1', 'BB1', '#', 'BQ1', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['WR1', '#', '#', '#', 'WK1', '#', '#', 'WR2']]))
    console.log('\n')
    // test 3:
    console.log('test 3:')
    console.log(getPieceFens([
    ['#', '#', '#', 'BK1', '#', '#', '#', 'BB2'],
    ['BQ4', '#', '#', 'BR2', '#', '#', 'WP4', '#'],
    ['#', '#', '#', 'WP2', '#', 'WP3', '#', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#'],
    ['BQ3', '#', 'WQ1', 'WK1', '#', 'WQ2', 'WB1', 'BR1'],
    ['#', '#', 'WN1', 'WP1', '#', '#', '#', '#'],
    ['#', '#', '#', 'WR1', '#', 'WR2', '#', '#'],
    ['BB1', '#', '#', 'BQ1', '#', '#', 'BQ2', '#']]))
    console.log('\n')
}
*/

