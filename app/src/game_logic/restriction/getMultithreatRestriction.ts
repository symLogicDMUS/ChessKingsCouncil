import { getPieceType } from "../pieceType/getPieceType";
import { getColor } from "../color/getColor";
import { rfToXy } from "../coordType/crdCnvrt";
import Rankfile from "../types/Rankfile";
import Ranges from "../types/Ranges";
import Board from "../types/Board";
import Color from "../types/Color";

export function getMultiThreatRestriction(board: Board, numPiecesCheckingKing: number, color: Color) {
    /**
     if there is more than 1 piece checking the king then each piece of color will be restricted to the square it's
     currently on, otherwise no multi-threat restriction so each piece gets all 64 coordinates
     */
    const multithreatRestriction: Ranges = {};

    if (numPiecesCheckingKing > 1) {
        for (const [rf, id] of Object.entries(board)) {
            if (id === "#") {
                continue;
            }
            if (getColor(id) !== color) {
                continue;
            }
            if (getPieceType(id) === "K") {
                continue;
            }

            multithreatRestriction[id] = [rfToXy(rf as Rankfile)];
        }
    } else {
        for (const [rf, id] of Object.entries(board)) {
            if (id === "#") {
                continue;
            }
            if (getColor(id) !== color) {
                continue;
            }
            if (getPieceType(id) === "K") {
                continue;
            }

            multithreatRestriction[id] = [];
        }
    }

    return multithreatRestriction;
}