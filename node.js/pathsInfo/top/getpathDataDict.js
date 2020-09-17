var  getPathDir  = require("../getPathDir");
var  PathData  = require("../PathData");
var  getPathData  = require("../getPathData");
var  stepFuncList  = require("../../helpers/stepFuncs").stepFuncList;
var  getStandardPieceDefs  = require("../../testObjects/getStandardPieceDefs");
var  getStandardIdDict  = require("../../testObjects/getStandardIdDict");
var  sampleBoardDicts  = require("../../testObjects/sampleBoardDicts");
const getPiecesOnPath = require("../getPiecesOnPath");
const mapListXyToRf = require("../../coordType/mapListXyToRf");

/** */
function getPathdataDict(board, sqr, color, pieceDefs, idDict) {
    /*get data about every path stemming from sqr, &&  dict.includes(record)**/
    
    let pdDict = {}
    for (var stepFunc of stepFuncList) {
        
        // get direction of path
        let pathDir = getPathDir(stepFunc)
        
        // initialize class for given direction
        pdDict[pathDir] = new PathData(pathDir)
        
        // get path data for given direction
        let pathData = getPathData(board, sqr, color, pieceDefs, idDict, stepFunc)
        
        //initialize class attributes to path data results
        pdDict[pathDir].coordPath = pathData[0]
        pdDict[pathDir].path = pathData[1]
        pdDict[pathDir].pieces = pathData[2]
        pdDict[pathDir].statuses = pathData[3]
        pdDict[pathDir].pieceMatchesPath = pathData[4]
    }

    return pdDict
}

module.exports = getPathdataDict;

if (require.main === module) {

    const getPieceLocs = require("../../helpers/getPieceLocsOnPath");
    const getMatchesPathLists = require("../../helpers/getMatchesPathLists")
    const getFandR = require("../../helpers/getFandR");
    const printBoard  = require("../../printers/printBoard");
    const getEmptySqrsOnPath = require("../../helpers/getEmptySqrsOnPath")

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