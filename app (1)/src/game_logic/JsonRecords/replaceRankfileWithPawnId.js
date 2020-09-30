import {pawnRange} from "../testObjects/sampleBoardDicts";
import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";


export function replaceRankfileWithPawnId(board, pawnHist) {
    var id;
    var newPawnHist = {}
    for (var rf of Object.keys(pawnHist)) {
        id = board[rf]
        newPawnHist[id] = pawnHist[rf]
    }
    return newPawnHist;
}

// module.exports = replaceRankfileWithPawnId;

/** for node.js
if (require.main === module) {

    import {dataDict} from "../testObjects/dataDicts/dd1"
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts"
    import {printBoard} from "../printers/printBoard";

    var pawnHist = dataDict["pawn_range"]["json"]["pawn_histories"]
    var board = sampleBoardDicts["pawn_range"]
    pawnHist = replaceRankfileWithPawnId(board, pawnHist)
    var oldLocs = []
    var currentLocs = []
    for (var hist of Object.values(pawnHist)) {
        for (let i = 0; i < hist.length - 1; i++) {
            oldLocs.push(hist[i])
        }
        currentLocs.push(hist[hist.length - 1])
    }
    console.log(pawnHist)
    printBoard(board, null, currentLocs, null, null, oldLocs)

}
*/