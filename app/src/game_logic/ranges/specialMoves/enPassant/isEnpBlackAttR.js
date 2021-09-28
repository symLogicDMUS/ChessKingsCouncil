import { enPassantBlackAttackRank } from "./enPassantBlackAttackRank";
import { xyToRf, rfToXy } from "../../../coordType/crdCnvrt";

export function isEnpBlackAttR(sqr) {
    /*return true if sqr the.includes(is) en-passant black attack rank, else false**/
    return enPassantBlackAttackRank.includes(xyToRf(...sqr));
}

// module.exports = isEnpBlackAttR;

/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../../../testObjects/sampleBoardDicts"
    import {printBoard} from "../../../printers/printBoard"

    var board = sampleBoardDicts["new"]
    var yes = []
    var no = []

    for (var rf of Object.keys(board)) {
        if (isEnpBlackAttR(rfToXy(rf)))
            yes.push(rf)
        else
            no.push(rf)
    }
    printBoard(board, "green: yes, red: no", no, yes)

}
*/
