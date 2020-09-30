import {strfind} from "../helpers/strfind";


export class Fen {

    constructor(data) {
        this.fen = data["fen"]
        this.turn = data["turn"]
        this.castleAvail = data["castle_avail"]
        this.enPassantAvail = data["en_passant_avail"]
        this.hmClock = parseInt(data["hm_clock"], 10)
        this.fmClock = parseInt(data["fm_clock"], 10)
    }

    update(specialMoves, jsonRecords, start, dest, captured, color) {
        /*update the non piece-position attributes of the fen: turn, castle avail, en-passant avail, &&  clocks**/
        this.turn = color.toLowerCase()
        this.UpdateCastleAvail(jsonRecords)
        this.updateEnPassantAvail(dest, specialMoves, start)
        this.UpdateClocks(captured, color, jsonRecords)
    }

    UpdateClocks(captured, color, jsonRecords) {
        if (jsonRecords.numConsecutiveNonPawnMoves === 0 || captured != 'undefined') {
            this.hmClock = 0
        }
        if (color === 'B') {
            this.fmClock += 1
        }
    }

    updateEnPassantAvail(dest, specialMoves, start) {
        if (strfind(specialMoves.enPassant, [start, dest])) { //condition needs modification
            this.enPassantAvail = dest;
        }
        else {
            this.enPassantAvail = '-'
        }
    }

    UpdateCastleAvail(jsonRecords) {

        var K, Q, k, q;

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
        if (! jsonRecords.kingsMoved["e8"] && ! jsonRecords.rooksMoved["a8"]) {
            k = 'k'
        }
        else {
            k = ''
        }
        if (! jsonRecords.kingsMoved["e8"] && ! jsonRecords.rooksMoved["h8"]) {
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

    getData() {
        /*return the fen components an.includes(as) object that can be sent to React**/
        return {"fen": this.fen, "turn": this.turn, "castle_avail": this.castleAvail,
                "en_passant_avail": this.enPassantAvail,
                "hm_clock": this.hmClock, "fm_clock": this.fmClock}
    }

    setGetNewFen(pos) {
        /*join the position string with the status attributes updated throughout the game, then return**/
        this.fen = " ".join([pos, this.turn, this.castleAvail, this.enPassantAvail, this.hmClock.toSring(), this.fmClock.toString() ]);
        return this.fen;
    }
}

// module.exports = Fen;