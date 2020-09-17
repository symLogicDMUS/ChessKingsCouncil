import {getStatusStr} from "../../fenParser/GameStatus/getStatusStr";
import {parseStatusStr} from "../../fenParser/GameStatus/parseStatusStr";


export function getFenData(fen) {
    /*get the status parts of the fen string: the turn, castle availability, en-passant availability, &&  clocks**/
    let statusStr = getStatusStr(fen)
    var [turn, castleAvail, enPassantAvail, hmNum, fmNum] = parseStatusStr(statusStr);
    return [turn, castleAvail, enPassantAvail, hmNum, fmNum]
}

// module.exports = getFenData;