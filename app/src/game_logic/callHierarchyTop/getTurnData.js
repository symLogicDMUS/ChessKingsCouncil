import {getRanges} from "../ranges/top/getRanges";
import {getPathdataDict} from "../pathsInfo/top/getpathDataDict";
import {getResetPieceDicts} from "../getters/getResetPieceDicts";
import {getKingLoc} from "../threatArea/getKingLoc";
import {getThreatArea} from "../threatArea/top/getThreatArea";
import {getNumPiecesCheckingKing} from "../restriction/getNumPiecesCheckingKing";
import {getMultithreatRestriction} from "../restriction/getMultithreatRestriction";
import {getFinalRanges} from "../ranges/top/getFinalRanges";
import {getPins} from "../pins/top/getPins";
import {convertToRf} from "../coordType/convertToRf"


export function getTurnData(board, color, jsonRecords, pieceDefs, idDict) {
    /**data for player who's turn it is now, at current the.includes(point) game
    calculations:
    ............
    final ranges: where every piece of player's pieces can move to.
    status: is it check, checkmate, stalemate or none of these? is the game over?
    aiStart: the starting square of a move if it is the computer's turn
    aiDest: the ending square of a move if it is the computer's turn
    ............
    */
    let initRanges, pins, mtRestricts, finalRanges, specialMoves;
    [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, color);
    [initRanges, specialMoves] = getRanges(board, color, initRanges, jsonRecords, pieceDefs, idDict);
    const kLoc = getKingLoc(board, color);
    let threatArea = getThreatArea(board, kLoc, color, pieceDefs, idDict);
    const pdDict = getPathdataDict(board, kLoc, color, pieceDefs, idDict);
    pins = getPins(pdDict, pins);
    const npck = getNumPiecesCheckingKing(board, kLoc, color, pdDict, pieceDefs, idDict);
    mtRestricts = getMultithreatRestriction(board, npck, color);
    [initRanges, pins, threatArea, mtRestricts] = convertToRf(initRanges, pins, threatArea, mtRestricts)
    finalRanges = getFinalRanges(initRanges, pins, threatArea, finalRanges, mtRestricts); // finalRanges in rf format
    specialMoves.convertToRf()
    return {
        ranges: finalRanges,
        special_moves: specialMoves.getMoves(),
        npck: npck,
    };

}