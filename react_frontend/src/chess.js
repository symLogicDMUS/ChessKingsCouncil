import { Fen } from "./sharedData/Fen"
import { JsonRecords } from "./sharedData/JsonRecords"
import { SpecialMoves } from "./sharedData/SpecialMoves"

export class Chess {

    constructor() {
        this.color = "-"
        this.captured = "-"
        this.board = "-"
        this.ranges = "-"
        this.jsonRecords = "-"
        this.fenObj = "-"
        this.specialMoves = "-"
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

    api() {
        let body = JSON.stringify({"board":this.getBoard(), "records":this.jsonRecords.getRecords(), "color":this.getColor()})
        return fetch('/update', {
            method: 'POST',
            body: body
        }).then(response => response.json())
        .then(data => {
            this.color = data['color']
            this.ranges = data['ranges']
            this.jsonRecords.update(data['records'])
            this.specialMoves.update(data['moves'])
        });    
    }

    update(start, dest) {
        /**called after a move is made. First update history and state and then get data for next move*/

        let id_ = this.board[start]
        let p_flag = false
        if (this.specialMoves.promos.includes([start, dest])) {
          p_flag = true
        }
        this.jsonRecords.updateHist(id_, start, dest, p_flag)
        // this.fenObj.updateState(this.specialMoves, this.jsonRecords, start, dest, this.captured, this.color)

        return Promise.all([this.api()])
    }      
}