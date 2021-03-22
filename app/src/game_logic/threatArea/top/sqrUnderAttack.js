import {getThreatArea} from "./getThreatArea";
import {getKingThreats} from "../getKingThreats";


export function sqrUnderAttack(board, sqr, color, pieceDefs, idDict) {
    /*return true if square is under attack, else false **/
    var threatArea = getThreatArea(board, sqr, color, pieceDefs, idDict)
    var kingThreats = getKingThreats(board, sqr, color)
    threatArea.push(...kingThreats)
    if (threatArea.length > 0) {
        return true
    }
    else {
        return false
    }
}