import { xyToRf } from "../../helpers/crdCnvrt";

export class Fen {

    set(fenData) {
        this.turn = fenData['turn']
        this.castleAvail = fenData['castle_avail']
        this.enPassantAvail = fenData['en_passant_avail']
        this.hmClock = Number.parseInt(fenData['hm_clock'])
        this.fmClock = Number.parseInt(fenData['fm_clock'])
    }

    getData() {
        return {
            'turn':this.turn,
            'castle_avail':this.castleAvail,
            'en_passant_avail':this.enPassantAvail,
            'hm_clock':this.hmClock,
            'fm_clock':this.fmClock
        }
    }
    update(specialMoves, jsonRecords, start, dest, captured, color) {
        /*update the non piece-position attributes of the fen: turn, castle avail, en-passant avail, and clocks**/
        this.turn = color.toLowerCase();
        this.updateCastleAvail(jsonRecords);
        this.updateEnPassantAvail(dest, specialMoves, start);
        this.updateClocks(captured, color, jsonRecords);
    }
    updateClocks(captured, color, jsonRecords) {
        if (jsonRecords.numConsecutiveNonPawnMoves === 0 || captured != 'undefined') {
            this.hmClock = 0
        }
        if (color === 'B') {
            this.fmClock += 1
        }
    }
    updateEnPassantAvail(dest, specialMoves, start) {
        if (specialMoves.isEnPassant([start, dest])) {
            this.enPassantAvail = dest
        }
        else {
            this.enPassantAvail = '-'
        }
    }
    updateCastleAvail(jsonRecords) {
        let [K, Q, k, q] = [null, null, null, null];
        if (! jsonRecords.kingsMoved["e1"] && ! jsonRecords.rooksMoved["h1"]) {
            K = 'K'
        }
        else {
            K = ''
        }
        if (! jsonRecords.kingsMoved["e1"] && ! jsonRecords.rooksMoved["a1"]) {
            Q = 'Q'
        }
        else {
            Q = ''
        }
        if (! jsonRecords.kingsMoved["e8"] && ! jsonRecords.rooksMoved["h8"]) {
            k = 'k'
        }
        else {
            k = ''
        }
        if (! jsonRecords.kingsMoved["e8"] && ! jsonRecords.rooksMoved["h1"]) {
            q = 'q'
        }
        else {
            q = ''
        }
        this.castleAvail = K + Q + k + q
        if (this.castleAvail === '') {
            this.castleAvail = '-'
        }
    }
}

