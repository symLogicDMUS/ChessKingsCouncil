const offsetStrsToList = require("./offsetStrsToList");


function ddOffsetStrsToList(dataDict) {
    /* **/
    for (var gameName of Object.keys(dataDict)) {
        dataDict[gameName]['defs'] = offsetStrsToList(dataDict[gameName]['defs'])
    }
    return dataDict
}


if (require.main === module) {
   
    var dataDict = require("../testObjects/dataDicts/dd1");
   const initDDEmptyLists = require("./initDDEmptyLists");

    dataDict = initDDEmptyLists(dataDict)
   console.log(ddOffsetStrsToList(dataDict))
}