import {
    step_1sqr90d,
    step_1sqr45d,
    step_1sqr0d,
    step_1sqr315d,
    step_1sqr270d,
    step_1sqr225d,
    step_1sqr180d,
    step_1sqr135d,
} from "../helpers/stepFuncs";
import {getRotation} from "../helpers/getRotation";
import {getStandardPieceDefs} from "../testObjects/getStandardPieceDefs";

export function getPieceMatchesPath(stepFunc, pieceDefs, pieceName, color) {
    /*if the type of piece matches the type of path, then the piece can attack on that type of path**/
    if (!Object.keys(pieceDefs).includes(pieceName)) {
        return false;
    }
    stepFunc = getRotation(stepFunc.name, 180);
    if (!pieceDefs[pieceName][color]["spans"].includes(stepFunc.name)) {
        return false;
    }
    return true;
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
                console.log(`piece type:${pieceName} path type:${stepFunc.name}\n`);
            }
            // B:
            matchesPath = getPieceMatchesPath(stepFunc, pieceDefs, pieceName, "B");
            if (matchesPath) {
                console.log(`piece type:${pieceName} path type:${stepFunc.name}\n`);
            }
        }
    }

}
*/
