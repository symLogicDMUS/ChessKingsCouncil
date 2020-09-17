

export class Fen {
    constructor(fen, turn, castleAvail, enPassantAvail, hmClock, fmClock) {
        this.fen = fen
        this.turn = turn
        this.castleAvail = castleAvail
        this.enPassantAvail = enPassantAvail
        this.hmClock = hmClock.toNunber();
        this.fmClock = fmClock.toNunber();
    }

    updateState(specialMoves, jsonRecords, start, dest, captured, color) {
        /*update the non piece-position attributes of the fen: turn, castle avail, en-passant avail, &&  clocks**/
        this.turn = color.lower()
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
        if (! jsonRecords.kingsMoved["e1"] && ! jsonRecords.rooksMoved["h1"]) {
            let K = 'K'
        }
        else {
            K = ''
        }
        if (! jsonRecords.kingsMoved["e1"] && ! jsonRecords.rooksMoved["a1"]) {
            let Q = 'Q'
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
            let q = 'q'
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
        return {"fen": this.fen, "turn": this.turn, "castleAvail": this.castleAvail,
                "enPassantAvail": this.enPassantAvail,
                "hmClock": this.hmClock, "fmClock": this.fmClock}
    }

    setGetNewFen(pos) {
        /*join the position string with the status attributes updated throughout the game, then return**/
        this.fen = " ".join([pos, this.turn, this.castleAvail, this.enPassantAvail, str(this.hmClock), str(this.fmClock)]);
        return this.fen;
    }
}

// module.exports = Fen;