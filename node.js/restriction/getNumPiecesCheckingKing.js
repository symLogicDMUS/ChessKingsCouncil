const  getOffsetThreats  = require("../threatArea/getOffsetThreats");
const  getPawnThreats  = require("../threatArea/getPawnThreats");
const  getNumPathAttackers  = require("../pathsInfo/top/getNumPathAttackers");



function getNumPiecesCheckingKing(board, sqr, color, pdDict, pieceDefs, idDict) {
    /*get the number of pieces checking the king of current turn**/
    let offsetThreats = getOffsetThreats(board, sqr, color, pieceDefs, idDict)
    let pawnThreats = getPawnThreats(board, sqr, color)
    let numPathAttackers = getNumPathAttackers(pdDict)
    return offsetThreats.length + pawnThreats.length + numPathAttackers
}

module.exports = getNumPiecesCheckingKing;

if (require.main === module) {

    const  getPathdataDict  = require("../pathsInfo/top/getpathDataDict");
    const  getStandardPieceDefs  = require("../testObjects/getStandardPieceDefs");
    const  getStandardIdDict  = require("../testObjects/getStandardIdDict");
    const  sampleBoardDicts  = require("../testObjects/sampleBoardDicts");
    const  printBoard  = require("../printers/printBoard");
    const initEmptyRanges = require("../apiHelpers/initEmptyRanges");
    const getPieceLoc = require(".././helpers/getPieceLoc")
    const {rfToXy} = require("../coordType/crdCnvrt")

    var pieceDefs = initEmptyRanges(getStandardPieceDefs())
    var idDict = getStandardIdDict()

    var pdDict, board, n, kingLoc;

    var game_names = [
    'check_example3',
    'fundemental_defense',
    'king_range_test',
    'knight_threat2',
    'pawn_threat1',
    'pinned_ex2',
    'stalemate_exp1',
    'super_checkmate_impossible_example']

    for (var game_name of game_names) {
        board = sampleBoardDicts[game_name]
        kingLoc = getPieceLoc(board, 'WK1')
        pdDict = getPathdataDict(board, rfToXy(kingLoc), 'W', pieceDefs, idDict)
        n = getNumPiecesCheckingKing(board, rfToXy(kingLoc), 'W', pdDict, pieceDefs, idDict)
        printBoard(board, `\n${game_name}, ${n}`, [kingLoc])
    }
}