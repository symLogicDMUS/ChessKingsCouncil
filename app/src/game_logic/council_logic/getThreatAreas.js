import { getThreatArea } from "../threatArea/top/getThreatArea";
import { rfToXy } from "../coordType/crdCnvrt";

export function getThreatAreas(board, kingLocs, color, pieceDefs, idDict) {
    var threatAreas = [];
    for (var sqr of kingLocs) {
        threatAreas.push(...getThreatArea(board, sqr, color, pieceDefs, idDict));
    }
    return threatAreas;
}

// module.exports = getThreatAreas;

/** for node.js
if (require.main === module) {
    import {printBoard} from "../printers/printBoard";
    import {mapListXyToRf} from "../coordType/mapListXyToRf";
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {getStandardPieceDefs} from "../testObjects/getStandardPieceDefs";
    import {getStandardIdDict} from "../testObjects/getStandardIdDict";
    import {initEmptyRanges} from "../apiHelpers/initEmptyRanges";
    import {initDDEmptyLists} from "../apiHelpers/initDDEmptyLists";
    import {dataDict} from "../testObjects/dataDicts/dd1";

    dataDict = initDDEmptyLists(dataDict);
    const pieceDefs = initEmptyRanges(getStandardPieceDefs());
    const idDict = getStandardIdDict();
    
    board = sampleBoardDicts["council_test_threat_area1"];
    printBoard(board, "", mapListXyToRf(getThreatAreas(board, [[1, 3], [2, 3], [8, 3], [7, 6]], "W", pieceDefs, idDict)));
}

 */
