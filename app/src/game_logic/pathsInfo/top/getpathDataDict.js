import {getPathDir} from "../getPathDir";
import {PathData} from "../PathData";
import {getPathData} from "../getPathData";
import {angles} from "../../helpers/stepFuncs";


/** */
export function getPathdataDict(board, sqr, color, pieceDefs, idDict) {
    /*get data about every path stemming from sqr, &&  dict.includes(record)**/
    
    var pdDict = {}
    for (var pathDir of angles) {
                
        // initialize class for given direction
        pdDict[pathDir] = new PathData(pathDir)
        
        // get path data for given direction
        var pathData = getPathData(board, sqr, color, pieceDefs, idDict, pathDir) //changed let to var
        
        //initialize class attributes to path data results
        pdDict[pathDir].coordPath = pathData[0]
        pdDict[pathDir].path = pathData[1]
        pdDict[pathDir].pieces = pathData[2]
        pdDict[pathDir].statuses = pathData[3]
        pdDict[pathDir].pieceMatchesPath = pathData[4]
    }

    return pdDict;
}

// module.exports = getPathdataDict;

/** for node.js
if (require.main === module) {

    import {getPieceLocs} from "../../helpers/getPieceLocsOnPath";
    import {getMatchesPathLists} from "../../helpers/getMatchesPathLists"
    import {getFandR} from "../../helpers/getFandR";
    import {printBoard} from "../../printers/printBoard";
    import {getEmptySqrsOnPath} from "../../helpers/getEmptySqrsOnPath"

    let board = sampleBoardDicts['check_example3']
    let pieceDefs = getStandardPieceDefs()
    let idDict = getStandardIdDict()
    var coordPath;

    let pdDict = getPathdataDict(board, [4, 4], 'W', pieceDefs, idDict)
    for (var angle of Object.keys(pdDict)) {
        console.log(`---------------- ${angle} ----------------`.blue)
        coordPath = mapListXyToRf(pdDict[angle].coordPath)
        let pieceLocs = getPieceLocs(board, coordPath)
        var [matchesPath, doesNotMatchPath] = getMatchesPathLists(pieceLocs, pdDict[angle].pieceMatchesPath)
        var [friends, enemies] = getFandR(pieceLocs, pdDict[angle].statuses)
        var emptySqrs = getEmptySqrsOnPath(coordPath, pieceLocs)
        printBoard(board, "friends: green, enemies: red, start square: blue", enemies, friends, ["d4"], emptySqrs)
        printBoard(board, "piece ability matches path: green, does not match path: red, start square: blue", doesNotMatchPath, matchesPath, ["d4"], emptySqrs)    
    }

}
*/