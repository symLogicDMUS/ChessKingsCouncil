const { pawnRange } = require("../testObjects/sampleBoardDicts");
const sampleBoardDicts = require("../testObjects/sampleBoardDicts");


function replaceRankfileWithPawnId(board, pawnHist) {
    var id;
    var newPawnHist = {}
    for (var rf of Object.keys(pawnHist)) {
        id = board[rf]
        newPawnHist[id] = pawnHist[rf]
    }
    return newPawnHist;
}

module.exports = replaceRankfileWithPawnId;

if (require.main === module) {

    const dataDict = require("../testObjects/dataDicts/dd1")
    const sampleBoardDicts = require("../testObjects/sampleBoardDicts")
    const printBoard = require("../printers/printBoard");

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