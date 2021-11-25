import { restriction } from "../restriction/restriction";
import { getPieceType } from "../pieceType/getPieceType";
import { mapListXyToRf } from "../coordType/mapListXyToRf";
import { mapDictListXyToRf } from "../coordType/mapDictListXyToRf";
import { intersection } from "../helpers/setOps";

// initRanges, pins, threatArea, finalRanges, mtRestrict
export function getFinalRanges(initRanges, threatArea, finalRanges) {
    /**the final range is the intersection of the initial range, pin, threat area, &&  multi-threat restriction
    :param initRanges:
    :param pins:
    :param threatArea:
    :param finalRanges:
    :param mtRestriction:
    :return:
    */

    initRanges = mapDictListXyToRf(initRanges);
    threatArea = mapListXyToRf(threatArea);

    let setA, setB, setC;

    for (const id of Object.keys(finalRanges)) {
        if (getPieceType(id) === "K") {
            finalRanges[id] = initRanges[id];
        } else {
            setA = new Set(initRanges[id]);
            setB = restriction(threatArea);
            setC = intersection(setA, setB);
            finalRanges[id] = Array.from(setC);
        }

        finalRanges[id] = Array.from(finalRanges[id]);
    }

    return finalRanges;
}

// module.exports = getFinalRanges;

/* for node.js
if (require.main === module) {
    import {printBoard} from "../printers/printBoard";
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {getPieceLoc} from "../helpers/getPieceLoc";

    var board, initPieceDict, initRanges, threatArea, finalRanges;
}
*/
