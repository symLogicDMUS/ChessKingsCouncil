
export function getPieceLoc(board, id) {

    for (const rf of Object.keys(board)) {
        if (board[rf] === id)
            return rf
    }
    return -1;
}

// module.exports = getPieceLoc;