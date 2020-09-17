
export function isPiece(id) {
    /*return true if id matches piece id pattern, otherwise return false **/
    if (id.match(`(W|B)[A-Z][1-9]`) !== null) {
        return true
    }
    else {
        return false
    }
}

// module.exports = isPiece;

/** for node.js
if (require.main === module) {
    for (var id of ['WP1', 'BB2', '#', 'WQ3', 'WT2', 'WK1', 'B%12', 'BK1', 'WR2', 'WN1']) {
        console.log(isPiece(id))
    }

}
*/