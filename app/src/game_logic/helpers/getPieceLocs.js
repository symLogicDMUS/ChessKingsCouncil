export function getPieceLocs(board, ids) {
    var pieceLocs = []
    for (var rf of Object.keys(board)) {
        if (ids.includes(board[rf])) {
            pieceLocs.push(rf)
        }
    }
    return pieceLocs
}

// module.exports = getPieceLocs;