const mapListXyToRf = require("../../coordType/mapListXyToRf");
var  {stepFuncDict}  = require("../../helpers/stepFuncs");
var  getPath  = require("../../ranges/paths/getPath");



function getPaths(funcNames, board, sqr, color) {
    /* **/
    var paths = [];
    var stepFunc;
    for (var funcName of funcNames) {
        stepFunc = stepFuncDict[funcName];
        paths.push(...getPath(sqr, board, color, stepFunc));
    }
    return paths;
}

module.exports = getPaths;

if (require.main === module) {
    
    const sampleBoardDicts = require("../../testObjects/sampleBoardDicts");
    const printBoard = require("../../printers/printBoard");

    var board, paths;

    var stepFuncNames =
        ["step_1sqr90d",
         "step_1sqr45d",
         "step_1sqr0d",
         "step_1sqr315d",
         "step_1sqr270d",
         "step_1sqr225d",
         "step_1sqr180d",
         "step_1sqr135d"]
    board = sampleBoardDicts["rangesTest"];
    paths = getPaths(stepFuncNames, board, [4, 3], 'W')
    printBoard(board, "white", mapListXyToRf(paths), null, ["d3"])
    paths = getPaths(stepFuncNames, board, [4, 5], 'B')
    printBoard(board, "black", mapListXyToRf(paths), null, ["d5"])
}