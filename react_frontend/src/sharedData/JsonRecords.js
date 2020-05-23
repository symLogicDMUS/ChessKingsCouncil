import { getPieceType } from "./getPieceType";
import { getPieceTypes } from "./getPieceTypes";
import {OVER, IN_PROGRESS} from "./gStatusTypes"
export class JsonRecords {
    /*contains info for new or saved game relevant to perfoming a castle or enPassant**/

    update(records) {
        this.rooksMoved = records['rooks_moved']
        this.kingsMoved = records['kings_moved']
        this.pawnHistories = records['pawn_histories']
        this.lastPawnMove = records['last_pawn_move']
        this.numConsecutiveNonPawnMoves = records['num_consecutive_non_pawn_moves']
        this.gameStatus = records['game_status']
        this.condition = records['condition']
        this.winner = records['winner']
    }

    getRecords() {
        return {
            "rooks_moved": this.rooksMoved,
            "kings_moved": this.kingsMoved,
            "pawn_histories": this.pawnHistories,
            "last_pawn_move": this.lastPawnMove,
            "num_consecutive_non_pawn_moves":this.numConsecutiveNonPawnMoves,
            "game_status": this.gameStatus,
            "condition": this.condition,
            "winner": this.winner
        }
    }
}