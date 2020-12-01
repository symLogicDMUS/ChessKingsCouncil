import { getPieceType } from "./getPieceType";

export function numKings(board, color) {
    let numKings = 0;
    for (const rf of Object.keys(board)) {
        if (getPieceType(board[rf]) === "K") {
            numKings++;
        }
    }
    return numKings;
}
