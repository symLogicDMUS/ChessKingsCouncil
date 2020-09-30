import {mapListXyToRf} from "./mapListXyToRf";


export function mapDictListXyToRf(dict) {
    /**rfDict not rf yet, but will make it be. */
    var rfDict = JSON.parse(JSON.stringify(dict))
    for (var k of Object.keys(rfDict)) {
        rfDict[k] = mapListXyToRf(rfDict[k])
    }
    return rfDict;
}

// module.exports = mapDictListXyToRf;

/** for node.js
if (require.main === module) {
    let ranges = {
        WB1: [],
        WR1: [],
        WB2: [],
        WR2: [],
        WK1: [],
        WQ1: [],
        WP1: [ [ 1, 3 ], [ 1, 4 ] ],
        WP2: [ [ 2, 3 ], [ 2, 4 ] ],
        WP3: [ [ 3, 3 ], [ 3, 4 ] ],
        WP4: [ [ 4, 3 ], [ 4, 4 ] ],
        WP5: [ [ 5, 3 ], [ 5, 4 ] ],
        WP6: [ [ 6, 3 ], [ 6, 4 ] ],
        WP7: [ [ 7, 3 ], [ 7, 4 ] ],
        WP8: [ [ 8, 3 ], [ 8, 4 ] ],
        WN1: [ [ 1, 3 ], [ 3, 3 ] ],
        WN2: [ [ 6, 3 ], [ 8, 3 ] ]
    }
    console.log(mapDictListXyToRf(ranges))

}
*/