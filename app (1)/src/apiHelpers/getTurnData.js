import {getRanges} from "../game_logic/ranges/top/getRanges";
import {getPathdataDict} from "../game_logic/pathsInfo/top/getpathDataDict";
import {getResetPieceDicts} from "../game_logic/getters/getResetPieceDicts";
import {getKingLocs} from "../game_logic/threatArea/getKingLocs";
import {getThreatArea} from "../game_logic/threatArea/top/getThreatArea";
import {getNumPiecesCheckingKing} from "../game_logic/restriction/getNumPiecesCheckingKing";
import {getMultithreatRestriction} from "../game_logic/restriction/getMultithreatRestriction";
import {getFinalRanges} from "../game_logic/ranges/top/getFinalRanges";
import {getPins} from "../game_logic/pins/top/getPins";
import {convertToRf} from "../game_logic/coordType/convertToRf"
import { isEmptyRanges } from "../game_logic/helpers/isEmptyRanges";
import { noRanges } from "../game_logic/fenParser/GameStatus/noRanges";
import {aiMove} from "./aiMove";


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
    var [initRanges, pins, mtRestricts, finalRanges] = getResetPieceDicts(board, color);
    var [initRanges, specialMoves] = getRanges(board, color, initRanges, jsonRecords, pieceDefs, idDict);
    var kLoc = getKingLocs(board, color);
    var threatArea = getThreatArea(board, kLoc, color, pieceDefs, idDict);
    var pdDict = getPathdataDict(board, kLoc, color, pieceDefs, idDict);
    var pins = getPins(pdDict, pins);
    var npck = getNumPiecesCheckingKing(board, kLoc, color, pdDict, pieceDefs, idDict);
    var mtRestricts = getMultithreatRestriction(board, npck, color);
    [initRanges, pins, threatArea, mtRestricts] = convertToRf(initRanges, pins, threatArea, mtRestricts)
    finalRanges = getFinalRanges(initRanges, pins, threatArea, finalRanges, mtRestricts); // finalRanges in rf format
    // specialMoves.setPromos(board, finalRanges, color);

    var aiCapture, aiStart, aiDest;
    if (color === aiColor && ! noRanges(finalRanges)) {
        [aiCapture, aiStart, aiDest] = aiMove(board, finalRanges, aiColor, specialMoves);
    }
    else {
        [aiCapture, aiStart, aiDest] = [false, false, false]
    }

    specialMoves.convertToRf()

    return {
        ranges: finalRanges,
        special_moves: specialMoves.getMoves(),
        ai_start: aiStart,
        ai_dest: aiDest,
        ai_capture: aiCapture,
        npck: npck,
    };

}

// module.exports = getTurnData;

/** for node.js
if (require.main === module) {

    import {getStandardPieceDefs} from "../testObjects/getStandardPieceDefs"
    import {getStandardIdDict} from "../testObjects/getStandardIdDict";
    import {initEmptyRanges} from "./initEmptyRanges"
    import {initDDEmptyLists} from "./initDDEmptyLists";
    import {initPawnIds} from "../JsonRecords/initPawnIds";
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {JsonRecords} from "../JsonRecords/JsonRecords";
    import {getPieceLoc} from "../helpers/getPieceLoc"
    import {dataDict} from "../testObjects/dataDicts/dd1";
    import {pieceDefs} from "../game_logic/testObjects/standardPieceDefs";
    import {printBoard} from "../game_logic/printers/printBoard";
    
    dataDict = initDDEmptyLists(dataDict)
    const pieceDefs = initEmptyRanges(getStandardPieceDefs())
    const idDict = getStandardIdDict()

    var board, jsonRecords;

    var game_names = [
      'castle_test1',
      'castle_test2',
      'castle_test3',
      'castle_test4',
      'check_example1',
      'check_example2',
      'check_example3',
      'check_example4',
      'check_example6',
      'dummy_game',
      'king_range_test',
      'knight_threat1',
      'knight_threat2',
      'pawn_promo',
      'pawn_range',
      'pawn_threat1',
      'ranges_test',
      'pinned_ex1',
      'pinned_ex2',
      'stalemate_exp1',
      'enpassant_test1',
      'fundemental_defense',
      'super_checkmate_impossible_example'
    ]

    for (var game_name of game_names) {
        console.log(`------------------------ ${game_name} ------------------------`.green)
        board = sampleBoardDicts[game_name]
        records = dataDict[game_name]["json"]
        jsonRecords = new JsonRecords(initPawnIds(records, board))
        var [finalRanges, specialMoves] = getTurnData(board, 'W', 'B', jsonRecords, pieceDefs, idDict)
        for (var id of Object.keys(finalRanges)) {
            printBoard(board, `\n${id}`, finalRanges[id], null, [getPieceLoc(board, id)])
        }
    }

}
*/