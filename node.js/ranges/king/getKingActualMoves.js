const sqrUnderAttack  = require("../../threatArea/top/sqrUnderAttack");
const getHypoBoards  = require("../../threatArea/getHypoBoards");
const mapListXyToRf = require("../../coordType/mapListXyToRf");
const { rfToXy } = require("../../coordType/crdCnvrt");


function getKingActualMoves(board, kingLoc, initRange, color, pieceDefs, idDict) {
    /*filter the king's initial moves to get the actual ones**/
    var boards = getHypoBoards(board, kingLoc, initRange, color)
    var actualMoves = []
    for (var [hypoKLoc, hypoBoard] of Object.entries(boards)) {
        if (! sqrUnderAttack(hypoBoard, rfToXy(hypoKLoc), color, pieceDefs, idDict)) {
            actualMoves.push(rfToXy(hypoKLoc))
        }
    }
    return actualMoves
}

module.exports = getKingActualMoves;

if (require.main === module) {
    
    const  JsonRecords  = require("../../JsonRecords/JsonRecords");
    const  SpecialMoves  = require("../specialMoves/SpecialMoves");
    const  getStandardPieceDefs  = require("../../testObjects/getStandardPieceDefs");
    const  getStandardIdDict  = require("../../testObjects/getStandardIdDict");
    const  sampleBoardDicts  = require("../../testObjects/sampleBoardDicts");
    const  printBoard  = require("../../printers/printBoard");
    const  initPawnIds = require("../../JsonRecords/initPawnIds");
    const  initEmptyRanges = require("../../apiHelpers/initEmptyRanges");
    var    dataDict = require("../../testObjects/dataDicts/dd1");
    
    var board, records, jsonRecords, specialMoves, actualMoves;
    var pieceDefs = initEmptyRanges(getStandardPieceDefs())
    var idDict = getStandardIdDict()

    //king range test
    board = sampleBoardDicts["king_range_test"];
    records = dataDict["king_range_test"]["json"]
    jsonRecords =  new JsonRecords(initPawnIds(records, board))
    specialMoves = new SpecialMoves()
    actualMoves = getKingActualMoves(board, [4, 3], [[3, 2], [4, 2], [3, 3], [5, 3], [3, 4], [5, 4]], "W", pieceDefs, idDict)
    printBoard(board, "\nking_range_test", mapListXyToRf(actualMoves))

    //super_checkmate_impossible_example
    board = sampleBoardDicts['super_checkmate_impossible_example']
    records = dataDict["super_checkmate_impossible_example"]["json"]
    jsonRecords =  new JsonRecords(initPawnIds(records, board))
    specialMoves = new SpecialMoves()
    actualMoves = getKingActualMoves(board, [6, 6], [[5, 5], [5, 6], [5, 7], [6, 5], [6, 7], [7, 5], [7, 6], [7, 7]], "W", pieceDefs, idDict)
    printBoard(board, "super_checkmate_impossible_example", mapListXyToRf(actualMoves))
}