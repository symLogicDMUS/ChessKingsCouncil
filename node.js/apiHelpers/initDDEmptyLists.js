const initEmptyRanges = require("./initEmptyRanges");


function initDDEmptyLists(dataDict) {
    /* **/
    for (var gameName of Object.keys(dataDict)) {
        dataDict[gameName]['defs'] = initEmptyRanges(dataDict[gameName]['defs'])
        if (! Object.keys(dataDict[gameName]).includes('promos')) {
            dataDict[gameName]['promos'] = []
        }
        if (! Object.keys(dataDict[gameName]['json']).includes('pawn_histories')) {
            dataDict[gameName]['json']['pawn_histories'] = {}
        }
    }
    return dataDict
}

module.exports = initDDEmptyLists;

if (require.main === module) {
    var dataDict = require("../testObjects/dataDicts/dd1");

    console.log(initDDEmptyLists(dataDict))
}

