export function convertOffsetPairsToStrs(offsets) {
    /*convert offsets from form [x,y] to form 'x,y' **/
    let newOffsets = [];
    for (const offset of offsets) {
        newOffsets.push(`${offset[0]},${offset[1]}`);
    }
    return newOffsets;
}
