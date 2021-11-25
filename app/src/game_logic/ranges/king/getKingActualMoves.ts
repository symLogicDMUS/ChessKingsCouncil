import { sqrUnderAttack } from "../../threatArea/top/sqrUnderAttack";
import { getHypoBoards } from "../../threatArea/getHypoBoards";
import { rfToXy } from "../../coordType/crdCnvrt";
import Board from "../../types/Board";
import XY from "../../types/XY";
import Color from "../../types/Color";
import PieceDef from "../../types/PieceDef";
import IdDict from "../../types/IdDict";

export function getKingActualMoves(
    board: Board,
    kingLoc: XY,
    initRange: Range,
    color: Color,
    pieceDefs: PieceDef [],
    idDict: IdDict
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