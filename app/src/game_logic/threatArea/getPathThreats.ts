import { getPathdataDict } from "../pathsInfo/top/getPathdataDict";
import { getIndexFirstPiece } from "../pathsInfo/getIndexFirstPiece";
import Board from "../types/Board";
import XY from "../types/XY";
import Color from "../types/Color";
import IdDict from "../types/IdDict";
import PieceDef from "../types/PieceDef";

export function getPathThreats(board: Board, sqr: XY, color: Color, pieceDefs: PieceDef [], idDict: IdDict) {
    /*get all squares that are path threats to sqr**/
    let pathDict, pathThreats;
    pathDict = getPathdataDict(board, sqr, color, pieceDefs, idDict);
    pathThreats = [];
    for (const direction of Object.keys(pathDict)) {
        if (pathDict[direction].pieces.length === 0) {
            continue;
        }
        if (pathDict[direction].statuses[0] !== "e") {
            continue;
        }
        if (!pathDict[direction].pieceMatchesPath[0]) {
            continue;
        }
        let i = getIndexFirstPiece(pathDict[direction].path);
        pathThreats.push(...pathDict[direction].coordPath.slice(0, i as number + 1));
    }
    return pathThreats;
}
