export function numPawns(board, color) {
    let n = 0;
    for (var rf of Object.keys(board)) {
        if (color === "W" && board[rf].startsWith("WP")) {
            n++;
        } else if (color === "B" && board[rf].startsWith["BP"]) {
            n++;
        }
    }
    return n;
}
