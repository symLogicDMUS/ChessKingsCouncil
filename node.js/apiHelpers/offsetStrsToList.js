
const convertOffsetStrsToPairs = require("./convertOffsetStrsToPairs");
const initDDEmptyLists = require("./initDDEmptyLists");
const initEmptyOffsets = require("./initEmptyOffsets");

function offsetStrsToList(pieceDefs) {
    /* **/
    for (var pieceName of Object.keys(pieceDefs)) {
        for (var color of ['W', 'B']) {
            pieceDefs[pieceName][color]['offsets'] = convertOffsetStrsToPairs(pieceDefs[pieceName][color]['offsets'])
        }
    }
    return pieceDefs
}

module.exports = offsetStrsToList;

if (require.main === module) {
    //TODO: implement test

    var pieceDefs = require("../testObjects/defs/defs1");
    var initEmptyRanges = require("./initEmptyRanges");
    
    pieceDefs = initEmptyRanges(pieceDefs)
    pieceDefs = offsetStrsToList(pieceDefs)
    console.log(pieceDefs);
}