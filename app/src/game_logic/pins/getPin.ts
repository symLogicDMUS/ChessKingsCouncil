import { getIndexAttackingPiece } from "./getIndexAttackingPiece";
import { getSubPath } from "../pathsInfo/getSubPath";
import {PathData} from "../pathsInfo/PathData";

export function getPin(pathData: PathData) {
    /*return the id of the piece that is pinned, &&  the coordinate path it is pinned to**/
    const i = getIndexAttackingPiece(pathData.pieces, pathData.path);
    const pinPath = getSubPath(pathData.coordPath, i);
    return [pathData.pieces[0], pinPath];
}