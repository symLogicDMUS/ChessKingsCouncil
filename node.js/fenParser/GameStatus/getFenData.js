var  getStatusStr  = require("../../fenParser/GameStatus/getStatusStr");
var  parseStatusStr  = require("../../fenParser/GameStatus/parseStatusStr");


function getFenData(fen) {
    /*get the status parts of the fen string: the turn, castle availability, en-passant availability, &&  clocks**/
    let statusStr = getStatusStr(fen)
    var [turn, castleAvail, enPassantAvail, hmNum, fmNum] = parseStatusStr(statusStr);
    return [turn, castleAvail, enPassantAvail, hmNum, fmNum]
}

module.exports = getFenData;