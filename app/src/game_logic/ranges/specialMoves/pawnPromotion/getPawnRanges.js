

export function getPawnRanges(pawnIds, ranges) {
    var pawnRanges = {}
    for (var id of pawnIds) {
        pawnRanges[id] = ranges[id]
    }
    return pawnRanges;
}

// module.exports = getPawnRanges;