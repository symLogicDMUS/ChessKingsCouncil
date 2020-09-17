import {enPassantWhiteAttackRank} from "./enPassantWhiteAttackRank";
import {xyToRf, rfToXy} from "../../../coordType/crdCnvrt"


export function isEnpWhiteAttR(sqr) {
    /*return true if sqr the.includes(is) en-passant white attack rank, else false**/
    if (enPassantWhiteAttackRank.includes(xyToRf(...sqr))) {
        return true
    }
    else {
        return false
    }
}

// module.exports = isEnpWhiteAttR;

/** for node.js
if (require.main === module) {
    
    import {sampleBoardDicts} from "../../../testObjects/sampleBoardDicts"
    import {printBoard} from "../../../printers/printBoard"

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
*/
