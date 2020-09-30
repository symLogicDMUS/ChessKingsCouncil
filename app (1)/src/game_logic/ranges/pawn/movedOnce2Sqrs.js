

export function movedOnce_2Sqrs(pawnHist, color) {
    /**
    takes a pawn history as input &&  returns true if  history indicates a single 
    move 2 square jump
    */
    if (color === 'W') {
        if (pawnHist.length === 2 &&  pawnHist[1][1] === pawnHist[0][1] + 2 &&  pawnHist[0][0] === pawnHist[1][0]) {
            return true
        }
        else {
            return false
        }
    }
    else if (color === 'B') {
        if (pawnHist.length === 2 &&  pawnHist[1][1] === pawnHist[0][1] - 2 &&  pawnHist[0][0] === pawnHist[1][0]) {
            return true
        }
        else {
            return false
        }
    }
    else {
        console.log('error: incorrect color\n')
        return -1
    }
}

// module.exports = movedOnce_2Sqrs;

/** for node.js
if (require.main === module) {
    // test 1:
    console.log('test 1:')
    console.log(movedOnce_2Sqrs([[2, 2], [2, 4]], 'W') === true)
    console.log('\n')
    // test 2:
    console.log('test 2:')
    console.log(movedOnce_2Sqrs([[5, 2], [5, 3]], 'W') === false)
    console.log('\n')
    // test 3:
    console.log('test 3:')
    console.log(movedOnce_2Sqrs([[5, 3]], 'W') === false)
    console.log('\n')
    // test 4:
    console.log('test 4:')
    console.log(movedOnce_2Sqrs([], 'W') === false)
    console.log('\n')
    // test 5:
    console.log('test 5:')
    console.log(movedOnce_2Sqrs([], 'B') === false)
    console.log('\n')
    // test 6:
    console.log('test 6:')
    console.log(movedOnce_2Sqrs([[2, 2], [2, 4]], 'B') === false)
    console.log('\n')
    // test 7:
    console.log('test 7:')
    console.log(movedOnce_2Sqrs([[3, 7], [3, 5]], 'B') === true)
    console.log('\n')
    // test 8:
    console.log('test 8:')
    console.log(movedOnce_2Sqrs([[3, 7], [3, 5]], 'W') === false)

}
*/
    console.log('\n')

