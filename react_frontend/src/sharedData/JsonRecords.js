import { getPieceType } from "./getPieceType";
import { getPieceTypes } from "./getPieceTypes";
import {OVER, IN_PROGRESS} from "./gStatusTypes";

export class JsonRecords {
    /*contains info for new or saved game relevant to perfoming a castle or enPassant**/
    constructor(records) {
        this.rooksMoved = records['rooksMoved']
        this.kingsMoved = records['kingsMoved']
        this.pawnHistories = records['pawnHistories']
        this.lastPawnMove = records['lastPawnMove']
        this.numConsecutiveNonPawnMoves = records['numConsecutiveNonPawnMoves']
        this.gameStatus = records['gameStatus']
        this.condition = records['condition']
        this.winner = records['winner']
    }

    update(records) {
        this.rooksMoved = records['rooksMoved']
        this.kingsMoved = records['kingsMoved']
        this.pawnHistories = records['pawnHistories']
        this.lastPawnMove = records['lastPawnMove']
        this.numConsecutiveNonPawnMoves = records['numConsecutiveNonPawnMoves']
        this.gameStatus = records['gameStatus']
        this.condition = records['condition']
        this.winner = records['winner']
    }

    updateHist(id_, start, dest, promoFlag) {
        /*update json records depending on the piece type of id_ at location start**/
        let pType = getPieceType(id_)
        if (pType != "Pawn") {
            this.numConsecutiveNonPawnMoves += 1
            if (pType === 'Rook' && Object.keys(this.rooksMoved).includes(start)) {
                this.updateRooksMoved(start)
            }
            else if (pType === 'King' && Object.keys(this.kingsMoved).includes(start)) {
                this.updateKingsMoved(start)
            }
        }
        else {
            this.resetNonPawnMoves()
            this.lastPawnMove = dest
            this.updatePawnHistory(id_, dest, promoFlag)
        }
        return
    }
    updateState(board, ranges, enemyColor, npck) {
        /**
         update the status of the game: OVER or IN_PROGRESS
         update the winner of the game: 'w', 'b', or '-' (neither)
         udpate the condition of the enemy king: 'check', 'checkmate', 'stalemate', or 'safe'
         :param board: dict, game board
         :param npck: int, number of pieces checking the king
         :param ranges: dict, ranges of pieces of color
         :param enemyColor: str, color of king
        */
        if (! Object.values(ranges).some(range => {return range === true})) {
            if (npck > 0) {
                this.condition = 'checkmate'
                this.gameStatus = OVER 
                this.winner = enemyColor
            }
            else {
                this.condition = 'stalemate' 
                this.gameStatus = OVER
                this.winner = '-'
            }
            return
        }
        let pieceTypes = getPieceTypes(board)
        if (pieceTypes === ['King', 'King']) {
            this.condition = 'stalemate'
            this.gameStatus = OVER
            this.winner = '-'
        }
        else if (pieceTypes === ['Bishop', 'King', 'King']) {
            this.condition = 'stalemate'
            this.gameStatus = OVER
            this.winner = '-'
        }
        else if (pieceTypes === ['King', 'King', 'Knight']) {
            this.condition = 'stalemate'
            this.gameStatus = OVER
            this.winner = '-'
        }
        else if (npck > 0) {
            this.condition = 'check'
            this.gameStatus = IN_PROGRESS
            this.winner = '-'
        }
        else {
            this.condition = ''
            this.gameStatus = IN_PROGRESS
            this.winner = '-'
        }
    }
    updateRooksMoved(sqr) {
        /*update rooksMoved because rook that start game at sqr has moved**/
        this.rooksMoved[sqr] = true
    }
    updateKingsMoved(sqr) {
        /*update kingsMoved because king that started game at sqr has moved**/
        this.kingsMoved[sqr] = true
    }
    updatePawnHistory(id_, newLoc, promo) {
        /*update location of pawn by appending its new location to its history**/
        if (promo) {
            delete this.pawnHistories[id_]
        }
        else {
            this.pawnHistories[id_].append(newLoc)
        }
    }
    resetNonPawnMoves() {
        /* a pawn has just moved, so reset number of consecutive non pawn moves to 0**/
        this.numConsecutiveNonPawnMoves = 0
    }
    deletePawn(id) {
        /*delete pawn with id from pawn histories**/
        delete this.pawnHistories[id]
    }
}