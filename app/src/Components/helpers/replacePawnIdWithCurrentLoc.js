export function replacePawnIdWithCurrentLoc(pawnHistories) {
    /*current location of the pawn becomes the key, where value is its history**/
    let [newPawnHistories, indexCurrentLoc] = [{}, -1];
    for (const pawnId of Object.keys(pawnHistories)) {
        indexCurrentLoc = pawnHistories[pawnId].length - 1;
        newPawnHistories[pawnHistories[pawnId][indexCurrentLoc]] =
            pawnHistories[pawnId];
    }
    return newPawnHistories;
}
