import { getThreatArea } from "../threatArea/top/getThreatArea";
import { rfToXy } from "../coordType/crdCnvrt";

export function getThreatAreas(board, kingLocs, color, pieceDefs, idDict) {
    const threatAreas = [];
    for (const sqr of kingLocs) {
        threatAreas.push(...getThreatArea(board, sqr, color, pieceDefs, idDict));
    }
    return threatAreas;
}

// module.exports = getThreatAreas;