

//import {initEmptyRanges} from "./apiHelpers/initEmptyRanges";

export function convertOffsetPairsToStrs(offsets) {
    /*convert offsets from form [x,y] to form 'x,y' **/
    let newOffsets = []
    for (var offset of offsets) {
        newOffsets.push(`${offset[0]},${offset[1]}`)
    }
    return newOffsets
}


/** for node.js 
     let evilMorty = {
        "B": {
            "img": "evilMortyRed.svg",
            "offsets": [
                [2, -1],
                [1, -2],
                [-1, -2],
                [-2, -1],
                [-2, 1],
                [-1, 2],
                [1, 2],
                [2, 1]
            ],
            "spans": [
                "step_1sqr270d",
                "step_1sqr225d",
                "step_1sqr180d",
                "step_1sqr135d",
                "step_1sqr90d",
                "step_1sqr45d",
                "step_1sqr0d",
                "step_1sqr315d"
            ]
        },
        "W": {
            "img": "evilMortyWhite.svg",
            "offsets": [
                [-2, 1],
                [-1, 2],
                [1, 2],
                [2, 1],
                [2, -1],
                [1, -2],
                [-1, -2],
                [-2, -1]
            ],
            "spans": [
                "step_1sqr90d",
                "step_1sqr45d",
                "step_1sqr0d",
                "step_1sqr315d",
                "step_1sqr270d",
                "step_1sqr225d",
                "step_1sqr180d",
                "step_1sqr135d"
            ]
        }
    }
    console.log(convertOffsetPairsToStrs(evilMorty['W']['offsets']))
    console.log(convertOffsetPairsToStrs(evilMorty['B']['offsets']))
}

*/