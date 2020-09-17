

function initEmptySpans(defs) {
    /* **/
    for (var pieceName of Object.keys(defs)) {
        for (var color of ['W', 'B']) {
            if (! Object.keys(defs[pieceName][color]).includes('spans')) {
                defs[pieceName][color]['spans'] = []
            }
        }
    }
    return defs
}

module.exports = initEmptySpans;

if (require.main === module) {
    //TODO: implement test
}