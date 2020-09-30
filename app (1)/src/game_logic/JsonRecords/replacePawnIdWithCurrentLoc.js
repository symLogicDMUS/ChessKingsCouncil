

export function replacePawnIdWithCurrentLoc(pawnHistories) {
    /*current location of the pawn becomes the key, where value is its history**/
    var [newPawnHistories, indexCurrentLoc] = [{}, -1];
    for (var pawnId of Object.keys(pawnHistories)) {
        indexCurrentLoc = pawnHistories[pawnId].length - 1;
        newPawnHistories[pawnHistories[pawnId][indexCurrentLoc]] = pawnHistories[pawnId];
    }
    return newPawnHistories;
}

// module.exports = replacePawnIdWithCurrentLoc;

/** for node.js
if (require.main === module) {
    console.log(replacePawnIdWithCurrentLoc({
        "WP3": ["c2", "c4", "b5", "b6", "b7"],
        "WP7": ["g2", "g4", "g5", "f6"],
        "WP8": ["h2", "h4"],
        "BP1": ["a7", "a5"],
        "BP7": ["g7", "g5", "g4"],
        "BP8": ["h7", "h5"]}))

}
*/