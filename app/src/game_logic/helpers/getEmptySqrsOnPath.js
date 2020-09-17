

export function getEmptySqrsOnPath(coordPath, pieceLocs) {

    var emptySqrs = []
    for (rf of coordPath) {
        if (! pieceLocs.includes(rf))
            emptySqrs.push(rf)
    }
    return emptySqrs;
}

// module.exports = getEmptySqrsOnPath;