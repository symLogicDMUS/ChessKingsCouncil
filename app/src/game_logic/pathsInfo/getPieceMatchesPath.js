import {getRotation} from "../helpers/getRotation";


export function getPieceMatchesPath(stepFuncName, pieceDefs, pieceName, color) {
    /*if the type of piece matches the type of path, then the piece can attack on that type of path**/
    if (! Object.keys(pieceDefs).includes(pieceName)) {
        return false;
    }
    stepFuncName = getRotation(stepFuncName, 180);
    return pieceDefs[pieceName][color]["spans"].includes(stepFuncName);
}

// module.exports = getPieceMatchesPath;

/** for node.js
if (require.main === module) {
    let pieceDefs = getStandardPieceDefs();
    for (var pieceName of Object.keys(pieceDefs)) {
        for (stepFunc of [
            step_1sqr0d,
            step_1sqr90d,
            step_1sqr180d,
            step_1sqr270d,
            step_1sqr45d,
            step_1sqr135d,
            step_1sqr225d,
            step_1sqr315d,
        ]) {
            // W:
            let matchesPath = getPieceMatchesPath(stepFunc, pieceDefs, pieceName, "W");
            if (matchesPath) {
                console.log(`piece type:${pieceName} path type:${stepFunc.Name}\n`);
            }
            // B:
            matchesPath = getPieceMatchesPath(stepFunc, pieceDefs, pieceName, "B");
            if (matchesPath) {
                console.log(`piece type:${pieceName} path type:${stepFunc.Name}\n`);
            }
        }
    }

}
*/
