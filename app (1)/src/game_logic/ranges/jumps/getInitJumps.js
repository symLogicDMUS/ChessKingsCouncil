export function getInitJumps(offsets, sqr) {
    /*jumps are square that can be reached through a piece jumping**/
    var x, y;
    let jumps = []
    for (var offset of offsets) {
        [x, y] = offset
        jumps.push([sqr[0] + x, sqr[1] + y])
    }
    return jumps;
}

// module.exports = getInitJumps;