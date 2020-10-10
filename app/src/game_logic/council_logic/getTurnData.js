import {getRanges} from "../ranges/top/getRanges";
import {getResetPieceDicts} from "./getResetPieceDicts";
import {getKingLocs} from "../threatArea/getKingLocs";
import {getThreatAreas} from "./getThreatAreas";
import {getFinalRanges} from "./getFinalRanges";
import {printBoard} from "../printers/printBoard";
// import {mapXyToRf} from "../coordType/rankfile/mapXyToRf";
// import {statusUpdate} from "../fenParser/GameStatus/statusUpdate";
// import {aiMove} from "./aiMove";

export function getTurnData(board, color, aiColor, jsonRecords, pieceDefs, idDict) {
    /**data for player who's turn it is now, at current the.includes(point) game
    calculations:
    ............
    final ranges: where every piece of player's pieces can move to.
    status: is it check, checkmate, stalemate or none of these? is the game over?
    aiStart: the starting square of a move if it is the computer's turn
    aiDest: the ending square of a move if it is the computer's turn
    ............
    */
    var [initRanges, finalRanges] = getResetPieceDicts(board, color);
    var [initRanges, specialMoves] = getRanges(board, color, initRanges, jsonRecords, pieceDefs, idDict);
    var kLoc = getKingLocs(board, color);
    var threatArea = getThreatAreas(board, kLoc, color, pieceDefs, idDict);
    finalRanges = getFinalRanges(initRanges, threatArea, finalRanges);
    specialMoves.setPromos(board, finalRanges, color);

    return [finalRanges, specialMoves];

    // var aiCapture, aiStart, aiDest;
    // if (color === aiColor && ! checkmate(finalRanges)) {
    //     var [aiCapture, aiStart, aiDest] = aiMove(board, finalRanges, aiColor, specialMoves);
    // }
    // else {
    //     var [aiCapture, aiStart, aiDest] = [false, false, false]
    // }

    // let data = {'status': statusUpdate(board, finalRanges, getEnemyColor(color), npck)}

    // data.update(mapXyToRf({   "ranges": finalRanges,
    //                           "moves": specialMoves.getMoves(),
    //                           "aiStart": aiStart,
    //                           "aiDest": aiDest,
    //                           "aiCapture": aiCapture}))
    // return data;
}

// module.exports = getTurnData;

/* for node.js
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