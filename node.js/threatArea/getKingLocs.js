const  { rfToXy } = require("../coordType/crdCnvrt")
const  getPieceType  = require("../pieceType/getPieceType");
const mapListRfToXy = require("../coordType/mapListRfToXy");
const  getColor  = require("../color/getColor");



function getKingLocs(board, color) {
    /*get the location of the king of given color NOTE: in the modified chess can return list instead of single item**/
    var locs = Object.keys(board).filter(s => getPieceType(board[s]) === 'K' &&  getColor(board[s]) === color)
    if (locs.length === 1) {
        return rfToXy(locs[0])
    }
    else {
        return mapListRfToXy(locs)
    }
}

module.exports = getKingLocs;

if (require.main === module) {
    
    const  sampleBoardDicts  = require("../testObjects/sampleBoardDicts");
    const printBoard = require("../printers/printBoard");

    var board, kingLoc;
    
    board = sampleBoardDicts['check_example3']
    kingLoc = getKingLocs(board, 'W')
    printBoard(board, `\ncheck_example3, white`, [kingLoc])
    kingLoc = getKingLocs(board, 'B')
    printBoard(board, `\ncheck_example3, black`, [kingLoc])

    board = sampleBoardDicts['super_checkmate_impossible_example']
    kingLoc = getKingLocs(board, 'W')
    printBoard(board, `\nsuper_checkmate_impossible_example, white`, [kingLoc])
    kingLoc = getKingLocs(board, 'B')
    printBoard(board, `\nsuper_checkmate_impossible_example, black`, [kingLoc])

}
