
export class JsonRecords {
    /*contains info for new or saved game relevant to perfoming a castle or enPassant**/

    constructor(records) {
        this.rooksMoved = records['rooks_moved'];
        this.kingsMoved = records['kings_moved'];
        this.pawnHistories = records['pawn_histories'];
        this.lastPawnMove = records['last_pawn_move'];
        this.numConsecutiveNonPawnMoves = records['num_consecutive_non_pawn_moves'];
    }

    update(records) {
        this.rooksMoved = records['rooks_moved'];
        this.kingsMoved = records['kings_moved'];
        this.pawnHistories = records['pawn_histories'];
        this.lastPawnMove = records['last_pawn_move'];
        this.numConsecutiveNonPawnMoves = records['num_consecutive_non_pawn_moves'];
        return;
    }

    getRecords() {
        return {
            "rooks_moved": this.rooksMoved,
            "kings_moved": this.kingsMoved,
            "pawn_histories": this.pawnHistories,
            "last_pawn_move": this.lastPawnMove,
            "num_consecutive_non_pawn_moves":this.numConsecutiveNonPawnMoves,
        };
    }
}