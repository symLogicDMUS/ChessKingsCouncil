import { getStatusStr } from "./getStatusStr";
import { parseStatusStr } from "./parseStatusStr";

export function getFenData(fen) {
    /*get the status parts of the fen string: the turn, castle availability, en-passant availability, &&  clocks**/
    let statusStr = getStatusStr(fen);
    const [turn, castleAvail, enPassantAvail, hmNum, fmNum] =
        parseStatusStr(statusStr);
    return [turn, castleAvail, enPassantAvail, hmNum, fmNum];
}

// module.exports = getFenData;
