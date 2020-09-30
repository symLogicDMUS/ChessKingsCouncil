
export function getMatchesPathLists(pieceLocs, matches) {

    var does = [];
    var doesNot = [];
    for (let i = 0; i < pieceLocs.length; i++) {
        if (matches[i])
            does.push(pieceLocs[i])
        else
            doesNot.push(pieceLocs[i])
    }
    return [does, doesNot]
}

// module.exports = getMatchesPathLists;