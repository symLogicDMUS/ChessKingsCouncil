import { xyToRf } from "../../helpers/crdCnvrt";

export class Fen {

    set(fenData) {
        this.fen = fenData['fen']
        this.turn = fenData['turn']
        this.castleAvail = fenData['castle_avail']
        this.enPassantAvail = fenData['en_passant_avail']
        this.hmClock = Number.parseInt(fenData['hm_clock'])
        this.fmClock = Number.parseInt(fenData['fm_clock'])
    }

    getData() {
        return {
            'fen':this.fen,
            'turn':this.turn,
            'castle_avail':this.castleAvail,
            'en_passant_avail':this.enPassantAvail,
            'hm_clock':this.hmClock,
            'fm_clock':this.fmClock
        }
    }

    setGetNewFen(pos) {
        /*join the position string with the status attributes updated throughout the game, then return**/
        this.fen = `${pos} ${this.turn} ${this.castleAvail} ${this.enPassantAvail} ${this.hmClock} ${this.fmClock}`
        return this.fen
    }
}