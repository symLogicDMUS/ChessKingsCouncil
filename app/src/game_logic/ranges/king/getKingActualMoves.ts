import { sqrUnderAttack } from "../../threatArea/top/sqrUnderAttack";
import { getHypoBoards } from "../../threatArea/getHypoBoards";
import { rfToXy } from "../../coordType/crdCnvrt";

export function getKingActualMoves(
    board,
    kingLoc,
    initRange,
    color,
    pieceDefs,
    idDict
) {
    /*filter the king's initial moves to get the actual ones**/
    const boards = getHypoBoards(board, kingLoc, initRange, color);
    const actualMoves = [];
    for (const [hypoKLoc, hypoBoard] of Object.entries(boards)) {
        if (
            !sqrUnderAttack(
                hypoBoard,
                rfToXy(hypoKLoc),
                color,
                pieceDefs,
                idDict
            )
        ) {
            actualMoves.push(rfToXy(hypoKLoc));
        }
    }
    return actualMoves;
}

// module.exports = getKingActualMoves;
