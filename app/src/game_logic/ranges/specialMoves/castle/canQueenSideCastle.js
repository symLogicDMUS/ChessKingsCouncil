import {getQueenSideCastlePaths} from "./getQueenSideCastlePaths";
import {kingStartPos} from "./kingStartPos";
import {safePath} from "./safePath";
import {sqrUnderAttack} from "../../../threatArea/top/sqrUnderAttack";
import {clearPath} from "../../../bools/clearPath";
import {printBoard} from "../../../printers/printBoard";
import { rfToXy } from "../../../coordType/crdCnvrt";


export function canQueenSideCastle(board, color, jsonRecords, pieceDefs, idDict) {
    /*return true if the queen side castle of the given color can be performed, else false**/
    
    if (jsonRecords.hasKingMoved(color)) {
        return false
    }

    if (jsonRecords.queenSideRookMoved(color)) {
        return false
    }

    var castlePath = getQueenSideCastlePaths(color)
    
    if (! clearPath(board, castlePath)) {
        return false
    }
    
    if (! safePath(board, castlePath, color, pieceDefs, idDict)) {
        return false
    }
    
    if (sqrUnderAttack(board, rfToXy(kingStartPos[color]), color, pieceDefs, idDict)) {
        return false
    }
    
    return true
}

// module.exports = canQueenSideCastle;

/** for node.js
if (require.main === module) {

    import {JsonRecords} from "../../../JsonRecords/JsonRecords";
    import {getStandardPieceDefs} from "../../../testObjects/getStandardPieceDefs";
    import {getStandardIdDict} from "../../../testObjects/getStandardIdDict";
    import {sampleBoardDicts} from "../../../testObjects/sampleBoardDicts";
    import {initPawnIds} from "../../../JsonRecords/initPawnIds";
    import {initEmptyRanges} from "../../../apiHelpers/initEmptyRanges";
    import {initDDEmptyLists} from "../../../apiHelpers/initDDEmptyLists";
    import {dataDict} from "../../../testObjects/dataDicts/dd1";
    
    var board, records, jsonRecords;
    var pieceDefs = initEmptyRanges(getStandardPieceDefs())
    var idDict = getStandardIdDict()
    dataDict = initDDEmptyLists(dataDict)

    //castle_test1, white
    board = sampleBoardDicts["castle_test1"];
    records = dataDict["castle_test1"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canQueenSideCastle(board, 'W', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nwhite true".green)
    }
    else {
       printBoard(board, "\nwhite, false".red) 
    }

    //castle_test1, black
    board = sampleBoardDicts["castle_test1"];
    records = dataDict["castle_test1"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canQueenSideCastle(board, 'B', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nblack true".green)
    }
    else {
       printBoard(board, "\nblack, false".red) 
    }


    //castle_test2, white
    board = sampleBoardDicts["castle_test2"];
    records = dataDict["castle_test2"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canQueenSideCastle(board, 'W', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nwhite true".green)
    }
    else {
       printBoard(board, "\nwhite, false".red) 
    }

    //castle_test2, black
    board = sampleBoardDicts["castle_test2"];
    records = dataDict["castle_test2"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canQueenSideCastle(board, 'B', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nblack true".green)
    }
    else {
       printBoard(board, "\nblack, false".red) 
    }

    //castle_test3, white
    board = sampleBoardDicts["castle_test3"];
    records = dataDict["castle_test3"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canQueenSideCastle(board, 'W', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nwhite true".green)
    }
    else {
       printBoard(board, "\nwhite, false".red) 
    }

    //castle_test3, black
    board = sampleBoardDicts["castle_test3"];
    records = dataDict["castle_test3"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canQueenSideCastle(board, 'B', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nblack true".green)
    }
    else {
       printBoard(board, "\nblack, false".red) 
    }


    //castle_test4, white
    board = sampleBoardDicts["castle_test4"];
    records = dataDict["castle_test4"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canQueenSideCastle(board, 'W', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nwhite true".green)
    }
    else {
       printBoard(board, "\nwhite, false".red) 
    }

    //castle_test4, black
    board = sampleBoardDicts["castle_test4"];
    records = dataDict["castle_test3"]["json"]
    jsonRecords = new JsonRecords(initPawnIds(records, board))
    if(canQueenSideCastle(board, 'B', jsonRecords, pieceDefs, idDict)) {
        printBoard(board, "\nblack true".green)
    }
    else {
       printBoard(board, "\nblack, false".red) 
    }


}
*/