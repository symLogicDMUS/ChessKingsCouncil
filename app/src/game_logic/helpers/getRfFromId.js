
export function getRfFromId(board, id) {
    /**given id return its location or -1 if not on board */
    for (var rf of Object.keys(board)) {
        if (board[rf] === id && id !== '#') {
            return rf;
        }
    }
    return -1;
}

// module.exports = getRfFromId;