import { getPieceType } from "../pieceType/getPieceType";
import { mapListRfToXy } from "../coordType/mapListRfToXy";
import { getColor } from "../color/getColor";

export function getKingLocs(board, color) {
    /*get the location of the king of given color NOTE: in the modified chess can return list instead of single item**/
    var locs = Object.keys(board).filter((s) => getPieceType(board[s]) === "K" && getColor(board[s]) === color);
    return mapListRfToXy(locs);
}


