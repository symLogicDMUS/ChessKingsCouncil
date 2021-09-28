import { noRanges } from "../fenParser/GameStatus/noRanges";
import { getRanges } from "../ranges/top/getRanges";
import { getResetPieceDicts } from "../council_logic/getResetPieceDicts";
import { getKingLocs } from "../threatArea/getKingLocs";
import { getThreatAreas } from "../council_logic/getThreatAreas";
import { getFinalRanges } from "../council_logic/getFinalRanges";

export function getTurnDataCouncil(
    board,
    color,
    jsonRecords,
    pieceDefs,
    idDict
) {
    /**data for player who's turn it is now, at current the.includes(point) game
     calculations:
     ............
     final ranges: where every piece of player's pieces can move to.
     status: is it check, checkmate, stalemate or none of these? is the game over?
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

    specialMoves.convertToRf();

    return {
        ranges: finalRanges,
        specialMoves: specialMoves.getMoves(),
        tal: threatArea.length,
    };
}

// module.exports = getTurnData;
