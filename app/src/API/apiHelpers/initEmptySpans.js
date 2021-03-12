

export function initEmptySpans(defs) {
    /* **/
    for (const pieceName of Object.keys(defs)) {
        for (const color of ['W', 'B']) {
            if (! Object.keys(defs[pieceName][color]).includes('spans')) {
                defs[pieceName][color]['spans'] = []
            }
        }
    }
    return defs
}
