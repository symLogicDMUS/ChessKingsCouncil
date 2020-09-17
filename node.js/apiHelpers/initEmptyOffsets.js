

function initEmptyOffsets(defs) {
    /* **/
    for (var pieceName of Object.keys(defs)) {
        for (var color of ['W', 'B']) {
            if (! Object.keys(defs[pieceName][color]).includes('offsets')) {
                defs[pieceName][color]['offsets'] = []
            }
        }
    }
    return defs
}

module.exports = initEmptyOffsets;


if (require.main === module) {
    //TODO: implement test
}

