const initEmptySpans = require("./initEmptySpans");
const initEmptyOffsets = require("./initEmptyOffsets");


function initEmptyRanges(defs) {
    /* **/
    defs = initEmptySpans(defs);
    defs = initEmptyOffsets(defs);
    return defs;
}

module.exports = initEmptyRanges;

if (require.main === module) {
    //TODO: implement test
}