const getRanges = require("../ranges/top/getRanges");
const getPathdataDict = require("../pathsInfo/top/getpathDataDict");
const getResetPieceDicts = require("../getters/getResetPieceDicts");
const getKingLocs = require("../threatArea/getKingLocs");
const getThreatArea = require("../threatArea/top/getThreatArea");
const getNumPiecesCheckingKing = require("../restriction/getNumPiecesCheckingKing");
const getMultithreatRestriction = require("../restriction/getMultithreatRestriction");
const getFinalRanges = require("../ranges/top/getFinalRanges");
const getPins = require("../pins/top/getPins");
const pieceDefs = require("../testObjects/standardPieceDefs");
const printBoard = require("../printers/printBoard");
// const mapXyToRf = require("../coordType/rankfile/mapXyToRf");
// const statusUpdate = require("../fenParser/GameStatus/statusUpdate");
// const aiMove = require("./aiMove");


function getTurnData(board, color, aiColor, jsonRecords, pieceDefs, idDict) {
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
    finalRanges = getFinalRanges(initRanges, pins, threatArea, finalRanges, mtRestricts);
    specialMoves.setPromos(board, finalRanges, color);

    return [finalRanges, specialMoves]

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

module.exports = getTurnData;

if (require.main === module) {

    const getStandardPieceDefs = require("../testObjects/getStandardPieceDefs")
    const getStandardIdDict = require("../testObjects/getStandardIdDict");
    const initEmptyRanges = require("./initEmptyRanges")
    const initDDEmptyLists = require("./initDDEmptyLists");
    const initPawnIds = require("../JsonRecords/initPawnIds");
    const sampleBoardDicts = require("../testObjects/sampleBoardDicts");
    const JsonRecords = require("../JsonRecords/JsonRecords");
    const getPieceLoc = require("../helpers/getPieceLoc")
    var dataDict = require("../testObjects/dataDicts/dd1");

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