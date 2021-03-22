
export function getNumPathAttackers(pdDict) {
    /*get the number of Rooks, Bishops, || Queens, that are attacking the King**/
    var numPathAttackers = 0;
    for (var direction of Object.keys(pdDict)) {
        if (pdDict[direction].pieces.length === 0) {
            continue
        }
        if (pdDict[direction].statuses[0] !== 'e') {
            continue
        }
        if (! pdDict[direction].pieceMatchesPath[0]) {
            continue
        }
        numPathAttackers += 1;
    }
    return numPathAttackers;
}