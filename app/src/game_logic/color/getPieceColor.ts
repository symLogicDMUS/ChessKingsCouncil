import Color from "../types/Color";
import PieceId from "../types/PieceId";

export function getPieceColor(pieceId: PieceId): Color {
    /* **/
    return pieceId[0] as Color;
}