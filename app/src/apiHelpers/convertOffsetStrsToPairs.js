

export function convertOffsetStrsToPairs(offsets) {
    /*convert offsets from form 'x,y' to form [x,y] **/
    var newOffsets = JSON.parse(JSON.stringify(offsets))
    for (let i = 0; i < newOffsets.length; i++) {
        newOffsets[i] = newOffsets[i].split(",")
        newOffsets[i][0] = parseInt(newOffsets[i][0], 10)
        newOffsets[i][1] = parseInt(newOffsets[i][1], 10)
    }
    return newOffsets;
}

// module.exports = convertOffsetStrsToPairs;

/** for node.js
if (require.main === module) {
    console.log(convertOffsetStrsToPairs(["1,-1", "3,-2", "5,-8", "7,3"]))

}
*/