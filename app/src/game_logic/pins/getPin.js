import {getIndexAttackingPiece} from "./getIndexAttackingPiece";
import {getSubPath} from "../pathsInfo/getSubPath";
import {PathData} from "../pathsInfo/PathData";



export function getPin(pathData) {
    /*return the id of the piece that is pinned, &&  the coordinate path it is pinned to**/
    var i = getIndexAttackingPiece(pathData.pieces, pathData.path)
    var pinPath = getSubPath(pathData.coordPath, i)
    return [pathData.pieces[0], pinPath]
}

// module.exports = getPin;


/** for node.js
if (require.main === module) {
    
    import {printBoard} from "../printers/printBoard";
    import {sampleBoardDicts} from "../testObjects/sampleBoardDicts";
    import {getPieceLoc} from "../helpers/getPieceLoc";
    var board = sampleBoardDicts["checkExample3"]
    import {mapListXyToRf} from "../coordType/mapListXyToRf";
    import {allExcept} from "../helpers/allExcept"
*/