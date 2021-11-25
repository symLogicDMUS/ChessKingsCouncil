import {PathData} from "../pathsInfo/PathData";

export function isPin(pathData: PathData): boolean {
    /**return true if the path contains a pinned piece, otherwise false 
        see class PathData
    */
    if (pathData.statuses.length < 2) {
        return false;
    }
    if (pathData.statuses[0] !== "f") {
        return false;
    }
    if (pathData.statuses[1] !== "e") {
        return false;
    }
    return pathData.pieceMatchesPath[1];
}
