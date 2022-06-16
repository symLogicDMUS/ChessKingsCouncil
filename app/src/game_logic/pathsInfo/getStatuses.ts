export function getStatuses(pieceIds, color) {
    /*takes a list of piece assignIds, &&  returns list of 'f' for friend &&  'e' for enemy**/
    let statuses = [];
    for (const piece of pieceIds) {
        if (piece[0] === color) {
            statuses.push("f");
        } else {
            statuses.push("e");
        }
    }
    return statuses;
}

