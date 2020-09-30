import {getPathdataDict} from "../pathsInfo/top/getpathDataDict";
import {getIndexFirstPiece} from "../pathsInfo/getIndexFirstPiece";
import {getStandardPieceDefs} from "../testObjects/getStandardPieceDefs";
import {getStandardIdDict} from "../testObjects/getStandardIdDict";


export function getPathThreats(board, sqr, color, pieceDefs, idDict) {
    /*get all squares that are path threats to sqr**/
    var pathDict, pathThreats;
    pathDict = getPathdataDict(board, sqr, color, pieceDefs, idDict)
    pathThreats = []
    for (var direction of Object.keys(pathDict)) {
        if (pathDict[direction].pieces.length === 0) {
            continue
        }
        if (pathDict[direction].statuses[0] != 'e') {
            continue
        }
        if (! pathDict[direction].pieceMatchesPath[0]) {
            continue
        }
        let i = getIndexFirstPiece(pathDict[direction].path)
        pathThreats.push(...pathDict[direction].coordPath.slice(0, i + 1))
    }
    return pathThreats
}

// module.exports = getPathThreats;

/** for node.js
if (require.main === module) {

    import {convertOffsetStrsToPairs} from "../apiHelpers/convertOffsetStrsToPairs";
    import {printBoard} from "../printers/printBoard";
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {mapListXyToRf} from "../coordType/mapListXyToRf";

    pieceDefs = getStandardPieceDefs()
    pieceDefs = convertOffsetStrsToPairs(pieceDefs)
    idDict = getStandardIdDict()
    
    var board = sampleBoardDicts["super_checkmate_impossible_example"];
    printBoard(board, "\ntest1", mapListXyToRf(getPathThreats(board, [6, 6], 'W', pieceDefs, idDict), null, ["f6"]))


}
*/