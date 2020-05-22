import { Fen } from "./sharedData/Fen"
import { JsonRecords } from "./sharedData/JsonRecords"
import { SpecialMoves } from "./sharedData/SpecialMoves"
export class Chess {

    constructor(game_name) {
        this.color = "-"
        this.captured = "-"
        this.board = "-"
        this.ranges = "-"
        this.jsonRecords = "-"
        this.fenObj = "-"
        this.specialMoves = "-"
        fetch('/start', {
            method:"POST",
            body:game_name
        }).then(response => response.json())
          .then(data => {
            this.color = data['color']
            this.board = data['board']
            this.ranges = data['ranges']
            this.jsonRecords = new JsonRecords(data['records'])
            this.fenObj = new Fen(data['fen_data'])
            this.specialMoves = new SpecialMoves(data['moves'])    
        })
    }

    // TODO: add function to determine if pawn promotion is needed.

    /*
        TODO: consider putting update in endDrag() in Pieces component. 
        See react DnD documentation for more details
        From React DnD:
        drop(item, monitor): Optional. Called when a compatible item is dropped on the target. 
        You may either return undefined, or a plain object. If you return an object, it is 
        going to become the drop result and will be available to the drag source in its 
        endDrag method as monitor.getDropResult()
    */
    update(start, dest) {
        /**called after a move is made. First update history and state and then get data for next move*/
        let id_ = this.board[start]
        let p_flag = undefined;
        if (this.specialMoves.promos.includes([start, dest])) {
            p_flag = true
        }
        else {
            p_flag = false
        }
        this.jsonRecords.updateHist(id_, start, dest, p_flag)
        this.fenObj.updateState(this.specialMoves, this.jsonRecords, start, dest, this.captured, this.color)

        fetch('/update', {
            method: 'POST',
            body: {'board': this.board, 'ranges': this.ranges, 'color':this.color}
        }).then(response => response.json())
        .then(data => {
            this.color = data['color']
            this.ranges = data['ranges']
            this.jsonRecords.update(data['records'])
            this.specialMoves.update(data['moves'])
        });
    }      
}