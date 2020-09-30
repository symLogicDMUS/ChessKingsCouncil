

export function removeCaptured(initRanges, pins, mtRestricts, finalRanges, captured) {
    /*remove the records of any piece that was captured**/
    if (captured != 'undefined') {
        delete initRanges[captured]
        delete pins[captured]
        delete mtRestricts[captured]
        delete finalRanges[captured]
    }
    return [initRanges, pins, mtRestricts, finalRanges]
}

// module.exports = removeCaptured;

/** for node.js
if (require.main === module) {
    //TODO: implement test
}
*/