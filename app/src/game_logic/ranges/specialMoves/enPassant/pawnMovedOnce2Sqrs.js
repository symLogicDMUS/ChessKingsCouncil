import {JsonRecords} from "../../../JsonRecords/JsonRecords";
import {getPieceType} from "../../../pieceType/getPieceType";
import {pawn2SqrFirstMoves} from "./pawn2SqrFirstMoves";
import {strfind} from "../../../helpers/strfind";


export function pawnMovedOnce2Sqrs(pawnHistories, id) {
    if (strfind(pawn2SqrFirstMoves, pawnHistories[id])) {
        return true
    }
    else {
        return false
    }
}

// module.exports = pawnMovedOnce2Sqrs;

/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../../../testObjects/sampleBoardDicts"
    import {printBoard} from "../../../printers/printBoard";
    import {dataDict} from "../../../testObjects/dataDicts/dd1";
    import {initPawnIds} from "../../../JsonRecords/initPawnIds";

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
*/