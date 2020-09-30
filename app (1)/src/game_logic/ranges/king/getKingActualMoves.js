import {sqrUnderAttack} from "../../threatArea/top/sqrUnderAttack";
import {getHypoBoards} from "../../threatArea/getHypoBoards";
import {mapListXyToRf} from "../../coordType/mapListXyToRf";
import { rfToXy } from "../../coordType/crdCnvrt";


export function getKingActualMoves(board, kingLoc, initRange, color, pieceDefs, idDict) {
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

// module.exports = getKingActualMoves;

/** for node.js
if (require.main === module) {
    
    import {JsonRecords} from "../../JsonRecords/JsonRecords";
    import {SpecialMoves} from "../specialMoves/SpecialMoves";
    import {getStandardPieceDefs} from "../../testObjects/getStandardPieceDefs";
    import {getStandardIdDict} from "../../testObjects/getStandardIdDict";
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";
    import {printBoard} from "../../printers/printBoard";
    import {initPawnIds} from "../../JsonRecords/initPawnIds";
    import {initEmptyRanges} from "../../apiHelpers/initEmptyRanges";
    import {dataDict} from "../../testObjects/dataDicts/dd1";
    
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
*/