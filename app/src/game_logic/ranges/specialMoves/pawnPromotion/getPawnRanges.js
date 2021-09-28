export function getPawnRanges(pawnIds, ranges) {
    const pawnRanges = {};
    for (const id of pawnIds) {
        pawnRanges[id] = ranges[id];
    }
    return pawnRanges;
}

// module.exports = getPawnRanges;
