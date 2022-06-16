import { getPieceType } from "../pieceType/getPieceType";
import Board from "../types/Board";
import Records from "../types/Records";

export function initPawnIds(records: Records, board: Board) {
    /*exchange the tf that pawn started the game with, with the id for that pawn**/
    const pawnHistories = {};
    let rf, id;

    if (!Object.keys(records).includes("pawn_histories")) {
        records["pawn_histories"] = {};
    }

    for (const hist of Object.values(records["pawn_histories"])) {
        rf = hist[hist.length - 1];
        id = board[rf];
        pawnHistories[id] = hist;
        if (getPieceType(id) !== "P") {
            throw new Error();
        }
    }
    records["pawn_histories"] = pawnHistories;
    return records;
}