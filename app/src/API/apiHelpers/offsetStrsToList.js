
import {convertOffsetStrsToPairs} from "./convertOffsetStrsToPairs";

export function offsetStrsToList(pieceDefs) {
    /* **/
    for (const pieceName of Object.keys(pieceDefs)) {
        for (const color of ['W', 'B']) {
            pieceDefs[pieceName][color]['offsets'] = convertOffsetStrsToPairs(pieceDefs[pieceName][color]['offsets'])
        }
    }
    return pieceDefs
}

// module.exports = offsetStrsToList;

/** for node.js
if (require.main === module) {
    //TODO: implement test

    import {pieceDefs} from "../testObjects/sampleDefs/defs1";
    import {initEmptyRanges} from "./initEmptyRanges";
    
    pieceDefs = initEmptyRanges(pieceDefs)
    pieceDefs = offsetStrsToList(pieceDefs)
    console.log(pieceDefs);
}
*/