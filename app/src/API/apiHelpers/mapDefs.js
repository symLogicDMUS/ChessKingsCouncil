import {convertOffsetStrsToPairs} from "./convertOffsetStrsToPairs";


export function mapDefs(defs) {
    /* **/
    for (const pieceName of Object.keys(defs)) {
        for (const color of ['W', 'B']) {
            defs[pieceName][color]['offsets'] = convertOffsetStrsToPairs(defs[pieceName][color]['offsets'])
        }
    }
    return defs
}

// module.exports = mapDefs;

/** for node.js
if (require.main === module) {
    //TODO: implement test

}
*/