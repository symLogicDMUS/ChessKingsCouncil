

export function getIndexAttackingPiece(pieceIds, allIds) {
    /*at this step in the process it has been determined that there is a pin. Therefore the attacking piece
      is the second piece encountered on the path. get the id of that piece. then find where it is in the 
      path as a whole. return that index location
    **/
    var pieceId = pieceIds[1]
    var i = allIds.findIndex(el => el === pieceId)
    return i
}

// module.exports = getIndexAttackingPiece;

/** for node.js
if (require.main === module) {
    
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts"
    import {xyToRf} from "../coordType/crdCnvrt"
    import {printBoard} from "../printers/printBoard";
    import {allExcept} from "../helpers/allExcept"

    var board = sampleBoardDicts['checkExample3']

    var pieceIds = ['WP2', 'BR2', 'BK1']
    var allIds = ['#', 'WP2', 'BR2', 'BK1']
    var i = getIndexAttackingPiece(pieceIds, allIds)
    var id_ = allIds[i]
    var sqrLoc = Object.keys(board).filter(sqr => board[sqr] === id_)[0]
    printBoard(board, null, [sqrLoc], null, ["d4"], allExcept(["d5", "d6", "d7", "d8"], sqrLoc))


    pieceIds = ['WP3', 'WP4', 'BB2']
    allIds = ['#', 'WP3', 'WP4', 'BB2']
    i = getIndexAttackingPiece(pieceIds, allIds)
    id_ = allIds[i]
    sqrLoc = Object.keys(board).filter(sqr => board[sqr] === id_)[0]
    printBoard(board, null, [sqrLoc], null, ["d4"], allExcept(["e5", "f6", "g7", "h8"], sqrLoc))
    
    
    pieceIds = ['WQ2', 'WB1', 'BR1']
    allIds = ['#', 'WQ2', 'WB1', 'BR1']
    i = getIndexAttackingPiece(pieceIds, allIds)
    id_ = allIds[i]
    sqrLoc = Object.keys(board).filter(sqr => board[sqr] === id_)[0]
    printBoard(board, null, [sqrLoc], null, ["d4"], allExcept(["e4", "f4", "g4", "h4"], sqrLoc))
    
    
    pieceIds = ['WR2', 'BQ2']
    allIds = ['#', 'WR2', 'BQ2']
    i = getIndexAttackingPiece(pieceIds, allIds)
    id_ = allIds[i]
    sqrLoc = Object.keys(board).filter(sqr => board[sqr] === id_)[0]
    printBoard(board, null, [sqrLoc], null, ["d4"], allExcept(["e3", "f2", "g1"], sqrLoc))
    
    
    pieceIds = ['WP1', 'WR1', 'BQ1']
    allIds = ['WP1', 'WR1', 'BQ1']
    i = getIndexAttackingPiece(pieceIds, allIds)
    id_ = allIds[i]
    sqrLoc = Object.keys(board).filter(sqr => board[sqr] === id_)[0]
    printBoard(board, null, [sqrLoc], null, ["d4"], allExcept(["d3", "d2", "d1"], sqrLoc))
    
    
    pieceIds = ['WN1', 'BB1']
    allIds = ['WN1', '#', 'BB1']
    i = getIndexAttackingPiece(pieceIds, allIds)
    id_ = allIds[i]
    sqrLoc = Object.keys(board).filter(sqr => board[sqr] === id_)[0]
    printBoard(board, null, [sqrLoc], null, ["d4"], allExcept(["c3", "b2", "a1"], sqrLoc))
    
    
    pieceIds = ['WQ1', 'BQ3']
    allIds = ['WQ1', '#', 'BQ3']
    i = getIndexAttackingPiece(pieceIds, allIds)
    id_ = allIds[i]
    sqrLoc = Object.keys(board).filter(sqr => board[sqr] === id_)[0]
    printBoard(board, null, [sqrLoc], null, ["d4"], allExcept(["c4", "b4", "a4"], sqrLoc))

}
*/