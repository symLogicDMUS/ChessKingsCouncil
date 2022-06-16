import { enPassants } from "./enPassants";

export function getTSqr(color, alignKey) {
    /*use alignment key to get square that pawn moves to capture by en-passant**/
    return enPassants[color][alignKey];
}

// module.exports = getTSqr;

/** for node.js
if (require.main === module) {
    console.log(getTSqr('B', 'b4a4'))
    console.log(getTSqr('W', 'c5d5'))
}
*/
