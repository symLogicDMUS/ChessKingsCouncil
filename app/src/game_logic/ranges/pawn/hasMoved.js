

export function hasMoved(pawnHist) {
    /*takes a pawn history as input, returns true if that pawn has moved else returns false**/
    return pawnHist.length > 1;
}

// module.exports = hasMoved;

/** for node.js
if (require.main === module) {
    // test 1:
    console.log('test 1:')
    console.log(hasMoved([[3, 2]]))
    // test 2:
    console.log('test 2:')
    console.log(hasMoved([[3, 2], [3, 4]]))

}
*/