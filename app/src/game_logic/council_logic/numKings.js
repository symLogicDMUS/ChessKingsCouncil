export function numKings(board, color) {
    let n = 0;
    for (var rf of Object.keys(board)) {
        if (color === "W" && board[rf].startsWith("WK")) {
            n++;
        } else if (color === "B" && board[rf].startsWith["BK"]) {
            n++;
        }
    }
}
