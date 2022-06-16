import { getPieceType } from "../pieceType/getPieceType";
import { mapListRfToXy } from "../coordType/mapListRfToXy";
import { getColor } from "../color/getColor";
import Board from "../types/Board";
import Color from "../types/Color";
import XY from "../types/XY";

export function getKingLocs(board: Board, color: Color) {
    /*get the location of the king of given color NOTE: in the modified chess can return list instead of single item**/
    var locs = Object.keys(board).filter(
        (s) => getPieceType(board[s]) === "K" && getColor(board[s]) === color
    );
    return mapListRfToXy(locs);
}
