const  canKingSideCastle  = require("../../specialMoves/castle/canKingSideCastle");
const  canQueenSideCastle  = require("../../specialMoves/castle/canQueenSideCastle");
const  getKingInitialMoves  = require("../getKingInitialMoves");
const  getKingActualMoves  = require("../getKingActualMoves");
const  getCastleTargetSquare  = require("../../specialMoves/castle/getCastleTargetSquare");
const  mapListXyToRf = require("../../../coordType/mapListXyToRf");
const initDDEmptyLists = require("../../../apiHelpers/initDDEmptyLists");



function king(board, sqr, color, jsonRecords, specialMoves, pieceDefs, idDict) {
    /**get the range of king at location sqr on board of given color
    pseudocode
    ---------
    get initial moves
    filter initial moves to get actual moves
    if canKingSideCastle...
        ..getKingSideCastle
    if canQueenSideCastle...
        ..getQueenSideCastle
    */
    var kRange, tSqr;
    kRange = getKingInitialMoves(board, sqr, color)
    if (canKingSideCastle(board, color, jsonRecords, pieceDefs, idDict)) {
        tSqr = getCastleTargetSquare(color, 'K')
        kRange.push(tSqr)
        specialMoves.addCastle([sqr, tSqr])
    }
    if (canQueenSideCastle(board, color, jsonRecords, pieceDefs, idDict)) {
        tSqr = getCastleTargetSquare(color, 'Q')
        kRange.push(tSqr)
        specialMoves.addCastle([sqr, tSqr])
    }
    kRange = getKingActualMoves(board, sqr, kRange, color, pieceDefs, idDict)

    return [kRange, specialMoves]
}

module.exports = king;

if (require.main === module) {


    const  getStandardPieceDefs  = require("../../../testObjects/getStandardPieceDefs");
    const  getStandardIdDict  = require("../../../testObjects/getStandardIdDict");
    const  sampleBoardDicts  = require("../../../testObjects/sampleBoardDicts");
    const  printBoard  = require("../../../printers/printBoard");
    const  initPawnIds = require("../../../JsonRecords/initPawnIds");
    const  initEmptyRanges = require("../../../apiHelpers/initEmptyRanges");
    const  JsonRecords  = require("../../../JsonRecords/JsonRecords");
    const  SpecialMoves  = require("../../specialMoves/SpecialMoves");    
    var dataDict = require("../../../testObjects/dataDicts/dd1");

    dataDict = initDDEmptyLists(dataDict)

    var board, records, range, specialMoves;
    var pieceDefs = initEmptyRanges(getStandardPieceDefs())
    var idDict = getStandardIdDict()

    //king range test
    board = sampleBoardDicts["king_range_test"];
    records = dataDict["king_range_test"]["json"]
    specialMoves = new SpecialMoves()
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    var [range, specialMoves] = king(board, [4, 3], "W", jsonRecords, specialMoves, pieceDefs, idDict)
    printBoard(board, "king_range_test",  mapListXyToRf(range), ["d3"])

    //check example 1
    specialMoves = new SpecialMoves()
    board = sampleBoardDicts["check_example1"];
    records = dataDict["check_example1"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    var [range, specialMoves] = king(board, [3, 4], "B", jsonRecords, specialMoves, pieceDefs, idDict)
    printBoard(board, "check_example1",  mapListXyToRf(range), ["c4"])

    //check example 2
    board = sampleBoardDicts["check_example2"];
    records = dataDict["check_example2"]["json"]
    specialMoves = new SpecialMoves()
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    var [range, specialMoves] = king(board, [1, 6], "W", jsonRecords, specialMoves, pieceDefs, idDict)
    printBoard(board, "check_example2",  mapListXyToRf(range), ["a6"])

    //check example 3
    board = sampleBoardDicts["check_example3"];
    records = dataDict["check_example3"]["json"]
    specialMoves = new SpecialMoves()
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    var [range, specialMoves] = king(board, [4, 4], "W", jsonRecords, specialMoves, pieceDefs, idDict)
    printBoard(board, "check_example3",  mapListXyToRf(range), ["d4"])

    //check example 4
    board = sampleBoardDicts["check_example4"];
    records = dataDict["check_example4"]["json"]
    specialMoves = new SpecialMoves()
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    var [range, specialMoves] = king(board, [5, 5], "W", jsonRecords, specialMoves, pieceDefs, idDict)
    printBoard(board, "check_example4",  mapListXyToRf(range), ["e5"])

    //check example 6
    board = sampleBoardDicts["check_example6"];
    records = dataDict["check_example6"]["json"]
    specialMoves = new SpecialMoves()
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    var [range, specialMoves] = king(board, [6, 1], "W", jsonRecords, specialMoves, pieceDefs, idDict)
    printBoard(board, "check_example6",  mapListXyToRf(range), ["f1"])

}
