import {offsetStrsToList} from "./offsetStrsToList";


export function ddOffsetStrsToList(dataDict) {
    /* **/
    for (var gameName of Object.keys(dataDict)) {
        dataDict[gameName]['defs'] = offsetStrsToList(dataDict[gameName]['defs'])
    }
    return dataDict
}


/** for node.js
if (require.main === module) {
   
    import {dataDict} from "../testObjects/dataDicts/dd1";
   import {initDDEmptyLists} from "./initDDEmptyLists";

    dataDict = initDDEmptyLists(dataDict)
   console.log(ddOffsetStrsToList(dataDict))

}
*/