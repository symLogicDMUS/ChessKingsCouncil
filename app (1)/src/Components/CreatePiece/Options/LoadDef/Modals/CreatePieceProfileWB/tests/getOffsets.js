
let xOffset = require("./xOffset");
let yOffset = require("./yOffset");

function getOffsets() {
    let offsetStrings = []
    offsets.forEach(offset => {
        offsetStrings.push(xOffset.xOffset(offset[0]) + yOffset.yOffset(offset[1]));
    })
    return offsetStrings;
}

exports.getOffsets = getOffsets;

let offsets = [[1, 2], [-1, 2], [1, -2], [-1, -2], [2, 1], [-2, 1], [2, -1], [-2, -1]];
if (require.main === module) {
    console.log(getOffsets(offsets))
}