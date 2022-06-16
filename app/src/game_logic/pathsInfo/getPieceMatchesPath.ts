import { getRotation } from "../helpers/getRotation";

export function getPieceMatchesPath(stepFuncName, pieceDefs, pieceName, color) {
    /*if the type of piece matches the type of path, then the piece can attack on that type of path**/
    if (!Object.keys(pieceDefs).includes(pieceName)) {
        return false;
    }
    stepFuncName = getRotation(stepFuncName, 180);
    return pieceDefs[pieceName][color]["spans"].includes(stepFuncName);
}