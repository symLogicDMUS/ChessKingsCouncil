

function getFullFen(posStr, fenObj) {
    /*join the position string with the status attributes updated throughout the game, to get the full fen string**/
    return [[posStr, fenObj["turn"], fenObj["castleAvail"], fenObj["enPassantAvail"], str(fenObj["hmClock"]), str(fenObj["fmClock"])]].join("")
}

module.exports = getFullFen;

if (require.main === module) {
}

