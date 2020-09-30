export function getFenDict(fen, turn, castleAvail, enPassantAvail, hmNum, fmNum) {
    return {
        fen: fen,
        turn: turn,
        castle_avail: castleAvail,
        en_passant_avail: enPassantAvail,
        hm_clock: hmNum,
        fm_clock: fmNum,
    };
}