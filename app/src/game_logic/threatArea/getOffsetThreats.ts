import { getPieceColor } from "../color/getPieceColor";
import { getNextColor as getEnemyColor } from "../color/getNextColor";
import { strfind } from "../helpers/strfind";
import { rfToXy } from "../coordType/crdCnvrt";
import { mapListRfToXy } from "../coordType/mapListRfToXy";
import Board from "../types/Board";
import XY from "../types/XY";
import Color from "../types/Color";
import PieceDef from "../types/PieceDef";
import IdDict from "../types/IdDict";

export function getOffsetThreats(board: Board, kingLoc: XY, color: Color, pieceDefs: PieceDef [], idDict: IdDict) {
    /* **/

    let id,
        rf,
        sqr,
        offset,
        pieceName,
        boardFilter1,
        boardFilter2,
        boardFilter3,
        boardFilter4;

    //filter out empty squares
    boardFilter1 = {};

    for (rf of Object.keys(board)) {
        if (board[rf] !== "#") {
            boardFilter1[rf] = board[rf];
        }
    }

    //only include piece if not the same color
    boardFilter2 = {};
    for (rf of Object.keys(boardFilter1)) {
        if (getPieceColor(boardFilter1[rf]) !== color) {
            boardFilter2[rf] = boardFilter1[rf];
        }
    }

    //filter out King and Pawn (special pieces)
    boardFilter3 = {};
    for (rf of Object.keys(boardFilter2)) {
        id = board[rf];
        pieceName = idDict[id[1].toLowerCase()];
        if (pieceName !== "King" && pieceName !== "Pawn") {
            boardFilter3[rf] = boardFilter2[rf];
        }
    }

    //only include pieces that have offsets that hit the king, as part of their range
    boardFilter4 = {};
    for (rf of Object.keys(boardFilter3)) {
        id = board[rf];
        sqr = rfToXy(rf);
        pieceName = idDict[id[1].toLowerCase()];
        offset = [kingLoc[0] - sqr[0], kingLoc[1] - sqr[1]];
        if (
            strfind(
                pieceDefs[pieceName][getEnemyColor(color)]["offsets"],
                offset
            )
        ) {
            boardFilter4[rf] = boardFilter3[rf];
        }
    }

    return mapListRfToXy(Object.keys(boardFilter4));
}
