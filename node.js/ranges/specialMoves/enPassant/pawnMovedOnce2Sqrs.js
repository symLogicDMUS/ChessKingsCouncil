var  JsonRecords  = require("../../../JsonRecords/JsonRecords");
var  getPieceType  = require("../../../pieceType/getPieceType");
const pawn2SqrFirstMoves = require("./pawn2SqrFirstMoves");
const strfind = require("../../../helpers/strfind");


function pawnMovedOnce2Sqrs(pawnHistories, id) {
    if (strfind(pawn2SqrFirstMoves, pawnHistories[id])) {
        return true
    }
    else {
        return false
    }
}

module.exports = pawnMovedOnce2Sqrs;

if (require.main === module) {

    const sampleBoardDicts = require("../../../testObjects/sampleBoardDicts")
    const printBoard = require("../../../printers/printBoard");
    const dataDict = require("../../../testObjects/dataDicts/dd1");
    const initPawnIds = require("../../../JsonRecords/initPawnIds");

    var board, jsonRecords, yes, no, records;
    
    yes = []; no = [];
    board = sampleBoardDicts["pawn_range"]
    records = dataDict["pawn_range"]["json"]  
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    for (var rf of Object.keys(board)) {
        if (board[rf] === '#') {
            continue
        }
        if (getPieceType(board[rf]) === 'P') {
            if (pawnMovedOnce2Sqrs(jsonRecords.pawnHistories, board[rf]))
                yes.push(rf)
            else
                no.push(rf)
        }
    }
    printBoard(board, "\ngreen: yes, red: no", no, yes)


    yes = []; no = [];
    board = sampleBoardDicts["new"]
    records = dataDict["NewCouncil"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    for (var rf of Object.keys(board)) {
        if (board[rf] === '#') {
            continue
        }
        if (getPieceType(board[rf]) === 'P') {
            if (pawnMovedOnce2Sqrs(jsonRecords.pawnHistories, board[rf]))
                yes.push(rf)
            else
                no.push(rf)
        }
    }
    printBoard(board, "\ngreen: yes, red: no", no, yes)


    yes = []; no = [];
    board = sampleBoardDicts["pawn_moves_test"]
    records = dataDict["pawn_moves_test"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    for (var rf of Object.keys(board)) {
        if (board[rf] === '#') {
            continue
        }
        if (getPieceType(board[rf]) === 'P') {
            if (pawnMovedOnce2Sqrs(jsonRecords.pawnHistories, board[rf]))
                yes.push(rf)
            else
                no.push(rf)
        }
    }
    printBoard(board, "\ngreen: yes, red: no", no, yes);

    
}