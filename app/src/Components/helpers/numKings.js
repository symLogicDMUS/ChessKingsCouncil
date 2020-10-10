import { getPieceType } from "./getPieceType";

export function numKings(board, color) {
    var numKings = 0;
    for (var rf of Object.keys(board)) {
        if (getPieceType(board[rf]) === "K") {
            numKings++;
        }
    }

    return numKings;
}
