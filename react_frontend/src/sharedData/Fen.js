import { xyToRf } from "../helperFuncs/crdCnvrt";
export class Fen {
    constructor(fenData) {
        this.fen = fenData['fen']
        this.turn = fenData['turn']
        this.castleAvail = fenData['castleAvail']
        this.enPassantAvail = fenData['enPassantAvail']
        this.hmClock = Number.parseInt(fenData['hmClock'])
        this.fmClock = Number.parseInt(fenData['fmClock'])
    }
    updateState(specialMoves, jsonRecords, start, dest, captured, color) {
        /*update the non piece-position attributes of the fen: turn, castle avail, en-passant avail, and clocks**/
        this.turn = color.lower()
        this.UpdateCastleAvail(jsonRecords)
        this.updateEnPassantAvail(dest, specialMoves, start)
        this.UpdateClocks(captured, color, jsonRecords)
    }
    UpdateClocks(captured, color, jsonRecords) {
        if (jsonRecords.numConsecutiveNonPawnMoves === 0 || captured != 'None') {
            this.hmClock = 0
        }
        if (color === 'B') {
            this.fmClock += 1
        }
    }
    updateEnPassantAvail(dest, specialMoves, start) {
        if (specialMoves.enPassant.includes([start, dest])) {
            this.enPassantAvail = dest;
        }
        else {
            this.enPassantAvail = '-'
        }
    }
    UpdateCastleAvail(jsonRecords) {

        let [K, Q, k, q] = ['-', '-', '-', '-']

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
    setGetNewFen(pos) {
        /*join the position string with the status attributes updated throughout the game, then return**/
        this.fen = `${pos}, ${this.turn}, ${this.castleAvail}, ${this.enPassantAvail}, ${this.hmClock}, ${this.fmClock}`
        return this.fen
    }
}