import {getFandR} from "../helpers/getFandR";


export function getStatuses(pieceIds, color) {
    /*takes a list of piece assignIds, &&  returns list of 'f' for friend &&  'e' for enemy**/
    let statuses = []
    for (var piece of pieceIds) {
        if (piece[0] === color) {
            statuses.push('f')
        }
        else {
            statuses.push('e')
        }
    }
    return statuses
}

// module.exports = getStatuses;

/** for node.js
if (require.main === module) {

    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {getCoordPath} from "./getCoordPath";
    import {mapListXyToRf} from "../coordType/mapListXyToRf";
    import {getPiecesOnPath} from "./getPiecesOnPath";
    import {getPieceLocs} from "../helpers/getPieceLocsOnPath";
    import {printBoard} from "../printers/printBoard";
    var {
        step_1sqr90d,
        step_1sqr45d,
        step_1sqr0d,
        step_1sqr315d,
        step_1sqr270d,
        step_1sqr225d,
        step_1sqr180d,
        step_1sqr135d,
        stepFuncList,
        stepFuncDict
    } = require("../helpers/stepFuncs");


    let board = sampleBoardDicts['check_example3']
    coordPath, piecesIdsOnPath, statuses;
    let friends = []
    let enemies = []
    let pieceLocs = []


    coordPath = getCoordPath(4, 4, step_1sqr0d);
    coordPath = mapListXyToRf(coordPath);
    pieceLocs = getPieceLocs(board, coordPath);
    piecesIdsOnPath = getPiecesOnPath(board, 4, 4, step_1sqr0d);
    statuses = getStatuses(piecesIdsOnPath, 'W');
    [friends, enemies] = getFandR(pieceLocs, statuses);
    printBoard(board, "0", enemies, friends, ["d4"])
    console.log('\n')


    coordPath = getCoordPath(4, 4, step_1sqr45d);
    coordPath = mapListXyToRf(coordPath);
    pieceLocs = getPieceLocs(board, coordPath);
    piecesIdsOnPath = getPiecesOnPath(board, 4, 4, step_1sqr45d);
    statuses = getStatuses(piecesIdsOnPath, 'W');
    [friends, enemies] = getFandR(pieceLocs, statuses);
    printBoard(board, "45", enemies, friends, ["d4"])
    console.log('\n')


    coordPath = getCoordPath(4, 4, step_1sqr90d);
    coordPath = mapListXyToRf(coordPath);
    pieceLocs = getPieceLocs(board, coordPath);
    piecesIdsOnPath = getPiecesOnPath(board, 4, 4, step_1sqr90d);
    statuses = getStatuses(piecesIdsOnPath, 'W');
    [friends, enemies] = getFandR(pieceLocs, statuses);
    printBoard(board, "90", enemies, friends, ["d4"])
    console.log('\n')


    coordPath = getCoordPath(4, 4, step_1sqr135d);
    coordPath = mapListXyToRf(coordPath);
    pieceLocs = getPieceLocs(board, coordPath);
    piecesIdsOnPath = getPiecesOnPath(board, 4, 4, step_1sqr135d);
    statuses = getStatuses(piecesIdsOnPath, 'W');
    [friends, enemies] = getFandR(pieceLocs, statuses);
    printBoard(board, "135", enemies, friends, ["d4"])
    console.log('\n')


    coordPath = getCoordPath(4, 4, step_1sqr180d);
    coordPath = mapListXyToRf(coordPath);
    pieceLocs = getPieceLocs(board, coordPath);
    piecesIdsOnPath = getPiecesOnPath(board, 4, 4, step_1sqr180d);
    statuses = getStatuses(piecesIdsOnPath, 'W');
    [friends, enemies] = getFandR(pieceLocs, statuses);
    printBoard(board, "180", enemies, friends, ["d4"])
    console.log('\n')

    coordPath = getCoordPath(4, 4, step_1sqr225d);
    coordPath = mapListXyToRf(coordPath);
    pieceLocs = getPieceLocs(board, coordPath);
    piecesIdsOnPath = getPiecesOnPath(board, 4, 4, step_1sqr225d);
    statuses = getStatuses(piecesIdsOnPath, 'W');
    [friends, enemies] = getFandR(pieceLocs, statuses);
    printBoard(board, "225", enemies, friends, ["d4"])
    console.log('\n')


    coordPath = getCoordPath(4, 4, step_1sqr270d);
    coordPath = mapListXyToRf(coordPath);
    pieceLocs = getPieceLocs(board, coordPath);
    piecesIdsOnPath = getPiecesOnPath(board, 4, 4, step_1sqr270d);
    statuses = getStatuses(piecesIdsOnPath, 'W');
    [friends, enemies] = getFandR(pieceLocs, statuses);
    printBoard(board, "270", enemies, friends, ["d4"])
    console.log('\n')

    
    coordPath = getCoordPath(4, 4, step_1sqr315d);
    coordPath = mapListXyToRf(coordPath);
    pieceLocs = getPieceLocs(board, coordPath);
    piecesIdsOnPath = getPiecesOnPath(board, 4, 4, step_1sqr315d);
    statuses = getStatuses(piecesIdsOnPath, 'W');
    [friends, enemies] = getFandR(pieceLocs, statuses);
    printBoard(board, "315", enemies, friends, ["d4"])
    console.log('\n')


    // console.log(getStatuses(['WP4', 'WR1', 'BQ3'], 'W').toString() === ['f', 'f', 'e'].toString())

}
*/