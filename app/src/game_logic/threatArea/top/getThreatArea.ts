import { getPathThreats } from "../getPathThreats";
import { getOffsetThreats } from "../getOffsetThreats";
import { getPawnThreats } from "../getPawnThreats";
import Board from "../../types/Board";
import XY from "../../types/XY";
import Color from "../../types/Color";
import PieceDef from "../../types/PieceDef";

export function getThreatArea(board: Board, sqr: XY, color: Color, pieceDefs: PieceDef [], idDict) {
    /* **/
    const threatArea = [];
    let pathThreats, offsetThreats, pawnThreats;
    pathThreats = getPathThreats(board, sqr, color, pieceDefs, idDict);
    offsetThreats = getOffsetThreats(board, sqr, color, pieceDefs, idDict);
    pawnThreats = getPawnThreats(board, sqr, color);
    threatArea.push(...pathThreats);
    threatArea.push(...offsetThreats);
    threatArea.push(...pawnThreats);
    return threatArea;
}
