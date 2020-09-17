const getMoveSimplest = require("./getMoveSimplest");
const filterEmptyRanges = require("./filterEmpyRanges");
const move = require("../movePiece/move");
const SpecialMoves = require("../ranges/specialMoves/SpecialMoves");



function aiMove(board, ranges, color, specialMoves) {
    /* **/
    var responseBoard = JSON.parse(JSON.stringify(board))
    var aiRanges = filterEmptyRanges(ranges)
    var pieceId = Object.keys(random.choice(list(aiRanges)))
    var [start, dest] = getMoveSimplest(responseBoard, pieceId, aiRanges)
    var [responseBoard, captured] = move(responseBoard, start, dest, color, specialMoves)
    
    if (captured === "undefined") {
        captured = false
    }

    return [captured, start, dest]
}

module.exports = aiMove;

if (require.main === module) {

    const printBoard = require("../printers/printBoard");
    const sampleBoardDicts = require("../testObjects/sampleBoardDicts");

    ranges = {'BB1': [],
              'BB2': [],
              'BK1': [],
              'BN1': [[1, 6], [3, 6]],
              'BN2': [[6, 6], [8, 6]],
              'BP1': [[1, 6], [1, 5]],
              'BP2': [[2, 6], [2, 5]],
              'BP3': [[3, 6], [3, 5]],
              'BP4': [[4, 6], [4, 5]],
              'BP5': [[5, 6], [5, 5]],
              'BP6': [[6, 6], [6, 5]],
              'BP7': [[7, 6], [7, 5]],
              'BP8': [[8, 6], [8, 5]],
              'BQ1': [],
              'BR1': [],
              'BR2': []}
    [captured, start, dest] = aiMove(sampleBoardDicts['singleMove'], ranges, 'B', SpecialMoves())
    console.log([captured, start, dest])
    printBoard(sampleBoardDicts['singleMove'], highlights=[start, dest])
}