import {noRanges} from "../fenParser/GameStatus/noRanges";
import {getRanges} from "../ranges/top/getRanges";
import {getResetPieceDicts} from "../council_logic/getResetPieceDicts";
import {getKingLocs} from "../threatArea/getKingLocs";
import {getThreatAreas} from "../council_logic/getThreatAreas";
import {getFinalRanges} from "../council_logic/getFinalRanges";
import {getAiMove} from "../../apiHelpers/getAiMove";

export function getTurnDataCouncil(board, color, jsonRecords, pieceDefs, idDict) {
    /**data for player who's turn it is now, at current the.includes(point) game
     calculations:
     ............
     final ranges: where every piece of player's pieces can move to.
     status: is it check, checkmate, stalemate or none of these? is the game over?
     ............
     */
    let initRanges, finalRanges, specialMoves;
    [initRanges, finalRanges] = getResetPieceDicts(board, color);
    [initRanges, specialMoves] = getRanges(board, color, initRanges, jsonRecords, pieceDefs, idDict);
    const kLoc = getKingLocs(board, color);
    const threatArea = getThreatAreas(board, kLoc, color, pieceDefs, idDict);
    finalRanges = getFinalRanges(initRanges, threatArea, finalRanges);

    specialMoves.convertToRf()

    return {
        ranges: finalRanges,
        special_moves: specialMoves.getMoves(),
        tal: threatArea.length
    };
}

// module.exports = getTurnData;

/*for node.js
if (require.main === module) {
    import {getStandardPieceDefs} from "../testObjects/getStandardPieceDefs"
    import {getStandardIdDict} from "../testObjects/getStandardIdDict";
    import {initEmptyRanges} from "../apiHelpers/initEmptyRanges"
    import {initDDEmptyLists} from "../apiHelpers/initDDEmptyLists";
    import {initPawnIds} from "../JsonRecords/initPawnIds";
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {JsonRecords} from "../JsonRecords/JsonRecords";
    import {getPieceLoc} from "../helpers/getPieceLoc"
    import {dataDict} from "../testObjects/dataDicts/dd1";

    dataDict = initDDEmptyLists(dataDict);
    const pieceDefs = initEmptyRanges(getStandardPieceDefs());
    const idDict = getStandardIdDict();

    var board, jsonRecords;

    var game_names = [
        "council_test_threat_area1"
    ];

    for (var game_name of game_names) {
        console.log(`------------------------ ${game_name} ------------------------`.green);
        board = sampleBoardDicts[game_name];
        records = dataDict[game_name]["json"];
        jsonRecords = new JsonRecords(initPawnIds(records, board));
        var [finalRanges, specialMoves] = getTurnData(board, "W", "B", jsonRecords, pieceDefs, idDict);
        for (var id of Object.keys(finalRanges)) {
            printBoard(board, `\n${id}`, finalRanges[id], null, [getPieceLoc(board, id)]);
        }
    }
}
*/