import {getCoordPath} from "../pathsInfo/getCoordPath";
import {getPath} from "../pathsInfo/getPath";
import {getPiecesOnPath} from "./getPiecesOnPath";
import {getStatuses} from "./getStatuses";
import {getPieceMatchesPath} from "./getPieceMatchesPath";
import {getStandardPieceDefs} from "../testObjects/getStandardPieceDefs";
import {getStandardIdDict} from "../testObjects/getStandardIdDict";
import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
import {mapListXyToRf} from "../coordType/mapListXyToRf";
import {printBoard} from "../printers/printBoard";
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


export function getPathData(board, sqr, color, pieceDefs, idDict, stepFunc) {
    /*get all info about a path on board determined by step function stemming from sqr**/
    let [x, y] = [...sqr];
    var coordPath = getCoordPath(x, y, stepFunc);
    var path = getPath(board, x, y, stepFunc);
    var pieceIds = getPiecesOnPath(board, x, y, stepFunc);
    var statuses = getStatuses(pieceIds, color);
    var pieceMatchesPath = [];
    var id, pieceName;
    for (var pieceId of pieceIds) {
        id = pieceId[1].toLowerCase();
        pieceName = idDict[id];
        pieceMatchesPath.push(getPieceMatchesPath(stepFunc, pieceDefs, pieceName, color));
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
