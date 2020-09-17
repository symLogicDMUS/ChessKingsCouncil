import {allXy} from "../helpers/allxy";


export function restriction(coordList) {
    /**get a restriction set from the coordList (threatArea || pins)
    if coordList was empty, then no restriction was found so return set of all_Xy else convert coordList to
    a set &&  return
    */
    if (coordList.length===0) {
        return allXy;
    }
    else {
        return new Set(coordList);
    }
}

// module.exports = restriction;

/** for node.js
if (require.main === module) {
    
    var restrictionResult = null;

    var pins = {
        WP1: [ [ 3, 4 ], [ 2, 3 ], [ 1, 2 ] ],
        WB1: [ [ 4, 4 ], [ 4, 3 ], [ 4, 2 ], [ 4, 1 ] ],
        WN1: [ [ 5, 4 ], [ 6, 3 ], [ 7, 2 ], [ 8, 1 ] ],
        WP2: [ [ 3, 5 ], [ 2, 5 ], [ 1, 5 ] ],
        WK1: [],
        WR1: [ [ 5, 5 ], [ 6, 5 ], [ 7, 5 ], [ 8, 5 ] ],
        WN2: [ [ 3, 6 ], [ 2, 7 ], [ 1, 8 ] ],
        WB2: [ [ 4, 6 ], [ 4, 7 ], [ 4, 8 ] ],
        WQ1: [ [ 5, 6 ], [ 6, 7 ], [ 7, 8 ] ]
    }
    for (var id of Object.keys(pins)) {
        restrictionResult = restriction(pins[id])
        console.log(`${id}`, restrictionResult)
    }

    


}
*/