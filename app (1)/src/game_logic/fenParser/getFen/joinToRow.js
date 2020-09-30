

export function joinToRow(row) {
    /*getFen TASK 3.1, join the squares from a row on the board**/
    return row.join("")
}

// module.exports = joinToRow;

/** for node.js
if (require.main === module) {
    // test 1:
    console.log(joinToRow(['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r']))
    console.log(joinToRow(['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']))
    console.log(joinToRow(['#', '#', '#', '#', '#', '#', '#', '#']))
    console.log(joinToRow(['#', '#', '#', '#', '#', '#', '#', '#']))
    console.log(joinToRow(['#', '#', '#', '#', '#', '#', '#', '#']))
    console.log(joinToRow(['#', '#', '#', '#', '#', '#', '#', '#']))
    console.log(joinToRow(['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P']))
    console.log(joinToRow(['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']))
    // test 2:
    console.log(joinToRow(['r', '#', '#', '#', 'k', '#', '#', 'r']))
    console.log(joinToRow(['#', 'P', '#', '#', '#', '#', '#', '#']))
    console.log(joinToRow(['#', '#', '#', '#', '#', 'P', '#', '#']))
    console.log(joinToRow(['p', '#', '#', '#', 'n', '#', '#', 'p']))
    console.log(joinToRow(['#', '#', '#', 'b', '#', 'B', 'p', 'P']))
    console.log(joinToRow(['N', 'B', 'Q', 'b', '#', 'q', '#', '#']))
    console.log(joinToRow(['#', '#', '#', '#', '#', '#', '#', '#']))
    console.log(joinToRow(['R', '#', '#', '#', 'K', '#', '#', 'R']))
}
*/

