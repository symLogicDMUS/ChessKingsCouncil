const { rfToXy } = require("../coordType/crdCnvrt");
const  {dist}  = require("../helpers/formulas");



function getPotentialPawnThreats(board, sqr, color) {
    /* return list of locations that might be pawn attacking king **/

    if (color === 'W') {
        return Object.keys(board).filter(sqr2 => {
            sqr2 = rfToXy(sqr2)
            return sqr2[1] > sqr[1] &&  dist(sqr, sqr2) === Math.sqrt(2)
        })
    }

    else if (color === 'B') {
        return Object.keys(board).filter(sqr2 => {
            sqr2 = rfToXy(sqr2)
            return sqr2[1] < sqr[1] &&  dist(sqr, sqr2) === Math.sqrt(2)
        })
    }

    else {
        console.log('error: color ! recognized\n')
        return -1
    }
}

module.exports = getPotentialPawnThreats;

if (require.main === module) {

    const  sampleBoardDicts  = require("../testObjects/sampleBoardDicts");
    const  printBoard  = require("../printers/printBoard");

    var board = sampleBoardDicts['pawn_threat1']
    
    // test 1:
    printBoard(board, "\nwhite", getPotentialPawnThreats(board, [6, 3], 'W'))
    console.log('\n')
    
    // test 2:
    printBoard(board, "\nblack", getPotentialPawnThreats(board, [3, 5], 'B'))
}