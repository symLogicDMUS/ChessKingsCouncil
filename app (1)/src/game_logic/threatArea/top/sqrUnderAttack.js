import {getThreatArea} from "./getThreatArea";
import {getKingThreats} from "../getKingThreats";
import {printBoard} from "../../printers/printBoard";
import {xyToRf} from "../../coordType/crdCnvrt";
import {mapListXyToRf} from "../../coordType/mapListXyToRf";


export function sqrUnderAttack(board, sqr, color, pieceDefs, idDict) {
    /*return true if square is under attack, else false **/
    var threatArea = getThreatArea(board, sqr, color, pieceDefs, idDict)
    var kingThreats = getKingThreats(board, sqr, color)
    threatArea.push(...kingThreats)
    if (threatArea.length > 0) {
        return true
    }
    else {
        return false
    }
}

// module.exports = sqrUnderAttack;

/** for node.js
if (require.main === module) {

    import {getStandardPieceDefs} from "../../testObjects/getStandardPieceDefs";
    import {getStandardIdDict} from "../../testObjects/getStandardIdDict";
    import {hypoBoardSamples} from "../../testObjects/hypoBoardSamples";
    import {sampleBoardDicts} from "../../testObjects/sampleBoardDicts";

    var pieceDefs, idDict, board, underAttack, notUnderAttack, results, threats, hypoBoards;

    pieceDefs = getStandardPieceDefs()
    idDict = getStandardIdDict()
    
    // threats = []
    // board = sampleBoardDicts['superCheckmateImpossibleExample']
    // for (var sqr of [[5, 5], [6, 5], [7, 5], [5, 6], [7, 6], [5, 7], [6, 7], [7, 7]]) {
    //     if (sqrUnderAttack(board, sqr, 'W', pieceDefs, idDict)) {
    //         threats.push(sqr)
    //     }
    // }
    // printBoard(board, "superCheckmateImpossibleExample", mapListXyToRf(threats))


    
    board = sampleBoardDicts['fundemental_defense']
    results = {} 
    for (let y = 1; y < 9 ; y++) {
        for (let x = 1; x < 9 ; x++) {
            results[xyToRf(x, y)] = sqrUnderAttack(board, [x, y], 'W', pieceDefs, idDict)
        }
    }
    underAttack = Object.keys(results).filter(rf => results[rf])
    notUnderAttack = Object.keys(results).filter(rf => ! results[rf])
    printBoard(board, "test 1, under attack by W:", underAttack, notUnderAttack)

    results = {} 
    for (let y = 1; y < 9 ; y++) {
        for (let x = 1; x < 9 ; x++) {
            results[xyToRf(x, y)] = sqrUnderAttack(board, [x, y], 'B', pieceDefs, idDict)
        }
    }
    underAttack = Object.keys(results).filter(rf => results[rf])
    notUnderAttack = Object.keys(results).filter(rf => ! results[rf])
    printBoard(board, "test 1, under attack by B:", underAttack, notUnderAttack)


}
*/
