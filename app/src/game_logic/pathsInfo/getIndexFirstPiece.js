

export function getIndexFirstPiece(ids) {
    /*take a list of assignIds &&  return the index of the first piece id**/
    for (let i = 0; i < ids.length; i++) {
        if (ids[i] !== '#') {
            return i
        }
    }
    return 'no pieces'
}

// module.exports = getIndexFirstPiece;

/** for node.js
if (require.main === module) {
    var i = getIndexFirstPiece(['#', 'WP1', 'WP2', 'BB1'])
    console.log(i)
    i = getIndexFirstPiece(['#', '#', '#', 'BB1'])
    console.log(i)

}
*/

