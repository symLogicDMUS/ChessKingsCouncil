export function getPieceLocs(board, ids) {
    const pieceLocs = [];
    for (const rf of Object.keys(board)) {
        if (ids.includes(board[rf])) {
            pieceLocs.push(rf);
        }
    }
    return pieceLocs;
}

// module.exports = getPieceLocs;
