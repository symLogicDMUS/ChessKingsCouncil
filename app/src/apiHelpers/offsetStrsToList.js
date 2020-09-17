
import {convertOffsetStrsToPairs} from "./convertOffsetStrsToPairs";
import {initDDEmptyLists} from "./initDDEmptyLists";
import {initEmptyOffsets} from "./initEmptyOffsets";

export function offsetStrsToList(pieceDefs) {
    /* **/
    for (var pieceName of Object.keys(pieceDefs)) {
        for (var color of ['W', 'B']) {
            pieceDefs[pieceName][color]['offsets'] = convertOffsetStrsToPairs(pieceDefs[pieceName][color]['offsets'])
        }
    }
    return pieceDefs
}

// module.exports = offsetStrsToList;

/** for node.js
if (require.main === module) {
    //TODO: implement test

    import {pieceDefs} from "../testObjects/defs/defs1";
    import {initEmptyRanges} from "./initEmptyRanges";
    
    pieceDefs = initEmptyRanges(pieceDefs)
    pieceDefs = offsetStrsToList(pieceDefs)
    console.log(pieceDefs);

}
*/