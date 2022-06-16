import { getCoordPath } from "./getCoordPath";
import { getPath } from "./getPath";
import { getPiecesOnPath } from "./getPiecesOnPath";
import { getStatuses } from "./getStatuses";
import { getPieceMatchesPath } from "./getPieceMatchesPath";
import { stepFuncDict } from "../helpers/stepFuncs";
import Board from "../types/Board";
import XY from "../types/XY";
import Color from "../types/Color";
import PieceDef from "../types/PieceDef";
import IdDict from "../types/IdDict";
import Angle from "../types/Angle";

export function getPathData(board: Board, sqr: XY, color: Color, pieceDefs: PieceDef [], idDict: IdDict, pathDir: Angle) {
    /*get all info about a path on board determined by step function stemming from sqr**/
    const stepFunc = stepFuncDict["step_1sqr" + pathDir];
    let [x, y] = [...sqr];
    const coordPath = getCoordPath(x, y, stepFunc);
    const path = getPath(board, x, y, stepFunc);
    const pieceIds = getPiecesOnPath(board, x, y, stepFunc);
    const statuses = getStatuses(pieceIds, color);
    const pieceMatchesPath = [];
    let id, pieceName;
    for (const pieceId of pieceIds) {
        id = pieceId[1].toLowerCase();
        pieceName = idDict[id];
        pieceMatchesPath.push(
            getPieceMatchesPath(
                "step_1sqr" + pathDir,
                pieceDefs,
                pieceName,
                color
            )
        );
    }
    return [coordPath, path, pieceIds, statuses, pieceMatchesPath];
}