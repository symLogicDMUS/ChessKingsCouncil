import {getPathThreats} from "../getPathThreats";
import {getOffsetThreats} from "../getOffsetThreats";
import {getPawnThreats} from "../getPawnThreats";
import {mapListXyToRf} from "../../coordType/mapListXyToRf";


export function getThreatArea(board, sqr, color, pieceDefs, idDict) {
    /* **/
    var threatArea = [];
    var pathThreats, offsetThreats, pawnThreats;
    pathThreats = getPathThreats(board, sqr, color, pieceDefs, idDict)
    offsetThreats = getOffsetThreats(board, sqr, color, pieceDefs, idDict)
    pawnThreats = getPawnThreats(board, sqr, color)
    threatArea.push(...pathThreats)
    threatArea.push(...offsetThreats)
    threatArea.push(...pawnThreats)
    return threatArea
}

// module.exports = getThreatArea;

/** for node.js
if (require.main === module) {

    import {getStandardPieceDefs} from "../../testObjects/getStandardPieceDefs";
    import {getStandardIdDict} from "../../testObjects/getStandardIdDict";
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {printBoard} from "../../printers/printBoard";

    var pieceDefs, idDict, board, threatArea;
    pieceDefs = getStandardPieceDefs()
    idDict = getStandardIdDict()

    board = sampleBoardDicts['super_checkmate_impossible_example'];
    threatArea = getThreatArea(board, [6, 6], 'W', pieceDefs, idDict)
    printBoard(board, "\nsuper_checkmate_impossible_example", mapListXyToRf(threatArea), ["f6"])
    console.log(threatArea)

    board = sampleBoardDicts['knight_threat2'];
    threatArea = getThreatArea(board, [5, 1], 'W', pieceDefs, idDict)
    printBoard(board, "\nknight_threat2", mapListXyToRf(threatArea), highlights3=["e1"])
    console.log(threatArea)

    board = sampleBoardDicts['check_example3'];
    threatArea = getThreatArea(board, [4, 4], 'W', pieceDefs, idDict)
    printBoard(board, "\ncheck_example3", mapListXyToRf(threatArea), highlights3=["d4"])
    console.log(threatArea)

}
*/