import { Fen } from "./sharedData/Fen";
import { JsonRecords } from "./sharedData/JsonRecords";
import { SpecialMoves } from "./sharedData/SpecialMoves";
import {getPieceType } from "./sharedData/getPieceType";
import { isPiece } from "./sharedData/isPiece";

export class Chess {

    constructor() {
        this.color = "W"
        this.captured = false
        this.board = {}
        this.ranges = {}
        this.jsonRecords = new JsonRecords()
        this.fenObj = new Fen()
        this.specialMoves = new SpecialMoves()
    }

    // TODO: add function to determine if pawn promotion is needed. moves

    /*
        TODO: consider putting update in endDrag() in Pieces component. 
        See react DnD documentation for more details
        From React DnD:
        drop(item, monitor): Optional. Called when a compatible item is dropped on the target. 
        You may either return undefined, or a plain object. If you return an object, it is 
        going to become the drop result and will be available to the drag source in its 
        endDrag method as monitor.getDropResult()
    */

    getBoard() {
        return this.board
    }

    getColor() {
        return this.color
    }

    toggleColor() {
        if (this.color === "W") {
            this.color = "B"
        }
        else if (this.color === "B") {
            this.color = "W"
        }
        else {
            console.log("color error")
        }
    }

    api(start, dest) {
        let body = JSON.stringify({"board":this.getBoard(), 
                                   "records":this.jsonRecords.getRecords(), 
                                   "color":this.getColor()})
        return fetch('/update', {
            method: 'POST',
            body: body
        }).then(response => response.json())
        .then(data => {
            this.ranges = data['ranges']
            this.specialMoves.update(data['moves'])
        });    
    }

    update(start, dest) {


        let pieceType = getPieceType(this.board[dest])

        if (pieceType === 'King') {
            this.jsonRecords.kingsMoved[start] = true
        }
    
        else if (pieceType === 'Rook') {
            this.jsonRecords.rooksMoved[start] = true
        }
    
        else if (pieceType === 'Pawn') {
            this.jsonRecords.pawnHistories[this.board[dest]].push(dest)
        }
    
        if (isPiece(this.captured) && getPieceType(this.captured) === 'Pawn') {
            delete this.jsonRecords.pawnHistories[this.board[this.captured]]
        }

        //TODO: update fenObject here

        return 
    }

    updateBackend(start, dest) {
        /**called after a move is made.*/
        return Promise.all([this.api(start, dest)])
    }      
}