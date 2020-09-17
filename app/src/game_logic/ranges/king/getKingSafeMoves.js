import {sqrUnderAttack} from "../../threatArea/top/sqrUnderAttack";
import {getStandardPieceDefs} from "../../testObjects/getStandardPieceDefs";
import {getStandardIdDict} from "../../testObjects/getStandardIdDict";
import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";


export function getKingSafeMoves(board, moveList, color, rangefunctions, idDict) {
    /*get the squares that king can move from the moves list, that do ! put check.includes(it)**/
    return moveList.filter(sqr => sqrUnderAttack(board, sqr, color, rangefunctions, idDict) === false)
}

// module.exports = getKingSafeMoves;

/** for node.js
if (require.main === module) {
    let idDict = getStandardIdDict()
    let rangeDefs = getStandardPieceDefs()
    // kingRangeTest, 4k3/6pp/8/8/3Pp3/2bK4/4B3/8 w - - 0 1
    let board = sampleBoardDicts['king_range_test'];
    getKingSafeMoves(board, ["d1", "f1", "d2", "e2", "f2"], 'W', rangeDefs, idDict)

}
*/