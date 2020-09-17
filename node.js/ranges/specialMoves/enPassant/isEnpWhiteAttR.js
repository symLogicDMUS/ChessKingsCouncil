const  enPassantWhiteAttackRank  = require("./enPassantWhiteAttackRank");
const {xyToRf, rfToXy} = require("../../../coordType/crdCnvrt")


function isEnpWhiteAttR(sqr) {
    /*return true if sqr the.includes(is) en-passant white attack rank, else false**/
    if (enPassantWhiteAttackRank.includes(xyToRf(...sqr))) {
        return true
    }
    else {
        return false
    }
}

module.exports = isEnpWhiteAttR;

if (require.main === module) {
    
    const sampleBoardDicts = require("../../../testObjects/sampleBoardDicts")
    const printBoard = require("../../../printers/printBoard")

    var board = sampleBoardDicts["new"]
    var yes = []
    var no = []

    for (var rf of Object.keys(board)) {
        if (isEnpWhiteAttR(rfToXy(rf)))
            yes.push(rf)
        else
            no.push(rf)
    }
    printBoard(board, "green: yes, red: no", no, yes)
}
