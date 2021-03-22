import {getPathThreats} from "../getPathThreats";
import {getOffsetThreats} from "../getOffsetThreats";
import {getPawnThreats} from "../getPawnThreats";


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