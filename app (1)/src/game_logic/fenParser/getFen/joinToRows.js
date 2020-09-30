import {joinToRow} from "./joinToRow";


export function joinToRows(rows) {
    /*getFen TASK 3, join each row to be a str**/
    for (let i = 0; i < rows.length; i++) {
        rows[i] = joinToRow(rows[i])
    }
    return rows
}

// module.exports = joinToRows;

/** for node.js
if (require.main === module) {
    console.log('test 1:')
    console.log(joinToRows(
        [['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
         ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
         ['#', '#', '#', '#', '#', '#', '#', '#'],
         ['#', '#', '#', '#', '#', '#', '#', '#'],
         ['#', '#', '#', '#', '#', '#', '#', '#'],
         ['#', '#', '#', '#', '#', '#', '#', '#'],
         ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
         ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']]))
    console.log('\n')
    console.log('test 2:')
    console.log(joinToRows(
        [['r', '#', '#', '#', 'k', '#', '#', 'r'],
         ['#', 'P', '#', '#', '#', '#', '#', '#'],
         ['#', '#', '#', '#', '#', 'P', '#', '#'],
         ['p', '#', '#', '#', 'n', '#', '#', 'p'],
         ['#', '#', '#', 'b', '#', 'B', 'p', 'P'],
         ['N', 'B', 'Q', 'b', '#', 'q', '#', '#'],
         ['#', '#', '#', '#', '#', '#', '#', '#'],
         ['R', '#', '#', '#', 'K', '#', '#', 'R']]))
    console.log('\n')
    console.log('test 3:')
    console.log(joinToRows(
        [['#', '#', '#', 'k', '#', '#', '#', 'b'],
         ['q', '#', '#', 'r', '#', '#', 'P', '#'],
         ['#', '#', '#', 'P', '#', 'P', '#', '#'],
         ['#', '#', '#', '#', '#', '#', '#', '#'],
         ['q', '#', 'Q', 'K', '#', 'Q', 'B', 'r'],
         ['#', '#', 'N', 'P', '#', '#', '#', '#'],
         ['#', '#', '#', 'R', '#', 'R', '#', '#'],
         ['b', '#', '#', 'q', '#', '#', 'q', '#']]))
    console.log('\n')

}
*/

