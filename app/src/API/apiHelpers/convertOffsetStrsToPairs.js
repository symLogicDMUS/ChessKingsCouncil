export function convertOffsetStrsToPairs(offsets) {
    /*convert offsets from form 'x,y' to form [x,y] **/
    const newOffsets = JSON.parse(JSON.stringify(offsets));
    for (let i = 0; i < newOffsets.length; i++) {
        newOffsets[i] = newOffsets[i].split(",");
        newOffsets[i][0] = parseInt(newOffsets[i][0], 10);
        newOffsets[i][1] = parseInt(newOffsets[i][1], 10);
    }
    return newOffsets;
}
