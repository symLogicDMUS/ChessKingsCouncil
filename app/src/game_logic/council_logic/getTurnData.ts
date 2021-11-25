import { getRanges } from "../ranges/top/getRanges";
import { getResetPieceDicts } from "./getResetPieceDicts";
import { getKingLocs } from "../threatArea/getKingLocs";
import { getThreatAreas } from "./getThreatAreas";
import { getFinalRanges } from "./getFinalRanges";

export function getTurnData(
    board,
    color,
    aiColor,
    jsonRecords,
    pieceDefs,
    idDict
) {
    /**data for player who's turn it is now, at current the.includes(point) game
    calculations:
    ............
    final ranges: where every piece of player's pieces can move to.
    status: is it check, checkmate, stalemate or none of these? is the game over?
    aiStart: the starting square of a move if it is the computer's turn
    aiDest: the ending square of a move if it is the computer's turn
    ............
    */
    let initRanges, finalRanges, specialMoves;
    [initRanges, finalRanges] = getResetPieceDicts(board, color);
    [initRanges, specialMoves] = getRanges(
        board,
        color,
        initRanges,
        jsonRecords,
        pieceDefs,
        idDict
    );
    const kLoc = getKingLocs(board, color);
    const threatArea = getThreatAreas(board, kLoc, color, pieceDefs, idDict);
    finalRanges = getFinalRanges(initRanges, threatArea, finalRanges);
    specialMoves.setPromos(board, finalRanges, color);

    return [finalRanges, specialMoves];
}

// module.exports = getTurnData;
