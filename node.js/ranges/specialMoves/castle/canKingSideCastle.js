var  getKingSideCastlePaths  = require("./getKingSideCastlePaths");
var  safePath  = require("./safePath");
var  clearPath  = require("../../../bools/clearPath");


function canKingSideCastle(board, color, jsonRecords, pieceDefs, idDict) {
    /*return true if the king side castle of the given color can be performed, else false**/
    if (jsonRecords.hasKingMoved(color)) {
        return false
    }

    if (jsonRecords.kingSideRookMoved(color)) {
        return false
    }

    let castlePath = getKingSideCastlePaths(color)

    if (! clearPath(board, castlePath)) {
        return false
    }

    if (! safePath(board, castlePath, color, pieceDefs, idDict)) {
        return false
    }

    return true
}

module.exports = canKingSideCastle;

if (require.main === module) {

    const  JsonRecords  = require("../../../JsonRecords/JsonRecords");
    const  getStandardPieceDefs  = require("../../../testObjects/getStandardPieceDefs");
    const  getStandardIdDict  = require("../../../testObjects/getStandardIdDict");
    const  sampleBoardDicts  = require("../../../testObjects/sampleBoardDicts");
    const  initPawnIds = require("../../../JsonRecords/initPawnIds");
    const  initEmptyRanges = require("../../../apiHelpers/initEmptyRanges");
    const  initDDEmptyLists = require("../../../apiHelpers/initDDEmptyLists");
    const  printBoard = require("../../../printers/printBoard");
    var    dataDict = require("../../../testObjects/dataDicts/dd1");
    
    var board, records, jsonRecords;
    var pieceDefs = initEmptyRanges(getStandardPieceDefs())
    var idDict = getStandardIdDict()
    dataDict = initDDEmptyLists(dataDict)

    //castle_test1, white
    board = sampleBoardDicts["castle_test1"];
    records = dataDict["castle_test1"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canKingSideCastle(board, 'W', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nwhite true".green)
    }
    else {
       printBoard(board, "\nwhite, false".red) 
    }

    //castle_test1, black
    board = sampleBoardDicts["castle_test1"];
    records = dataDict["castle_test1"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canKingSideCastle(board, 'B', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nblack true".green)
    }
    else {
       printBoard(board, "\nblack, false".red) 
    }


    //castle_test2, white
    board = sampleBoardDicts["castle_test2"];
    records = dataDict["castle_test2"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canKingSideCastle(board, 'W', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nwhite true".green)
    }
    else {
       printBoard(board, "\nwhite, false".red) 
    }

    //castle_test2, black
    board = sampleBoardDicts["castle_test2"];
    records = dataDict["castle_test2"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canKingSideCastle(board, 'B', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nblack true".green)
    }
    else {
       printBoard(board, "\nblack, false".red) 
    }

    //castle_test3, white
    board = sampleBoardDicts["castle_test3"];
    records = dataDict["castle_test3"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canKingSideCastle(board, 'W', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nwhite true".green)
    }
    else {
       printBoard(board, "\nwhite, false".red) 
    }

    //castle_test3, black
    board = sampleBoardDicts["castle_test3"];
    records = dataDict["castle_test3"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canKingSideCastle(board, 'B', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nblack true".green)
    }
    else {
       printBoard(board, "\nblack, false".red) 
    }


    //castle_test4, white
    board = sampleBoardDicts["castle_test4"];
    records = dataDict["castle_test4"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canKingSideCastle(board, 'W', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nwhite true".green)
    }
    else {
       printBoard(board, "\nwhite, false".red) 
    }

    //castle_test4, black
    board = sampleBoardDicts["castle_test4"];
    records = dataDict["castle_test3"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canKingSideCastle(board, 'B', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nblack true".green)
    }
    else {
       printBoard(board, "\nblack, false".red) 
    }

}