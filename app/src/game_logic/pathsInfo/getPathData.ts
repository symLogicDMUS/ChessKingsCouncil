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

export function getPathData(board: Board, sqr: XY, color: Color, pieceDefs: PieceDef [], idDict, pathDir) {
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

// module.exports = getPathData;

/** for node.js
if (require.main === module) {
    let board = sampleBoardDicts["check_example3"];
    let pieceDefs = getStandardPieceDefs();
    let idDict = getStandardIdDict();

    // test 1, 90:
    console.log("test 1:");
    var [coordPath, path, pieces, statuses, pieceMatchesPath] = getPathData(
        board,
        [4, 4],
        "W",
        pieceDefs,
        idDict,
        step_1sqr90d
    );
    printBoard(
        board,
        `path:${path} pieces:${pieces} statuses:${statuses} pieceMatchesPath:${pieceMatchesPath}`,
        mapListXyToRf(coordPath),
        ["d4"]
    );
    console.log("");


    // test 2, 45:
    console.log("test 2:")
    var [coordPath, path, pieces, statusVals, pieceMatchesPath] = getPathData(
        board,
        [4, 4],
        "W",
        pieceDefs,
        idDict,
        step_1sqr45d
    );
    printBoard(
        board,
        `path:${path} pieces:${pieces} statuses:${statusVals} pieceMatchesPath:${pieceMatchesPath}`,
        mapListXyToRf(coordPath),
        ["d4"]
    );
    console.log("");


    // test 3, 0:
    console.log("test 3:")
    var [coordPath, path, pieces, statuses, pieceMatchesPath] = getPathData(
        board,
        [4, 4],
        "W",
        pieceDefs,
        idDict,
        step_1sqr0d
    );
    printBoard(
        board,
        `path:${path} pieces:${pieces} statuses:${statuses} pieceMatchesPath:${pieceMatchesPath}`,
        mapListXyToRf(coordPath),
        ["d4"]
    );
    console.log("");

    
    // test 4, 315:
    // console.log("test 4:")
    var [coordPath, path, pieces, statuses, pieceMatchesPath] = getPathData(
        board,
        [4, 4],
        "W",
        pieceDefs,
        idDict,
        step_1sqr315d
    );
    printBoard(
        board,
        `path:${path} pieces:${pieces} statuses:${statuses} pieceMatchesPath:${pieceMatchesPath}`,
        mapListXyToRf(coordPath),
        ["d4"]
    );
    console.log("");


    // test 5, 270:
    console.log("test 5:")
    var [coordPath, path, pieces, statuses, pieceMatchesPath] = getPathData(
        board,
        [4, 4],
        "W",
        pieceDefs,
        idDict,
        step_1sqr270d
    );
    printBoard(
        board,
        `path:${path} pieces:${pieces} statuses:${statuses} pieceMatchesPath:${pieceMatchesPath}`,
        mapListXyToRf(coordPath),
        ["d4"]
    );
    console.log("");


    // test 6, 225:
    console.log("test 6:")
    var [coordPath, path, pieces, statuses, pieceMatchesPath] = getPathData(
        board,
        [4, 4],
        "W",
        pieceDefs,
        idDict,
        step_1sqr225d
    );
    printBoard(
        board,
        `path:${path} pieces:${pieces} statuses:${statuses} pieceMatchesPath:${pieceMatchesPath}`,
        mapListXyToRf(coordPath),
        ["d4"]
    );
    console.log("");


    // test 7, 180:
    console.log("test 7:")
    var [coordPath, path, pieces, statuses, pieceMatchesPath] = getPathData(
        board,
        [4, 4],
        "W",
        pieceDefs,
        idDict,
        step_1sqr180d
    );
    printBoard(
        board,
        `path:${path} pieces:${pieces} statuses:${statuses} pieceMatchesPath:${pieceMatchesPath}`,
        mapListXyToRf(coordPath),
        ["d4"]
    );
    console.log("");


    // test 8, 135:
    console.log("test 8:")
    var [coordPath, path, pieces, statuses, pieceMatchesPath] = getPathData(
        board,
        [4, 4],
        "W",
        pieceDefs,
        idDict,
        step_1sqr135d
    );
    printBoard(
        board,
        `path:${path} pieces:${pieces} statuses:${statuses} pieceMatchesPath:${pieceMatchesPath}`,
        mapListXyToRf(coordPath),
        ["d4"]
    );
    console.log("");

}
*/
