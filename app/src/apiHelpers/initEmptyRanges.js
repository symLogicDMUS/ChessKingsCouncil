import {initEmptySpans} from "./initEmptySpans";
import {initEmptyOffsets} from "./initEmptyOffsets";


export function initEmptyRanges(defs) {
    /* **/
    defs = initEmptySpans(defs);
    defs = initEmptyOffsets(defs);
    return defs;
}

// module.exports = initEmptyRanges;

/** for node.js
if (require.main === module) {
    //TODO: implement test

}
*/