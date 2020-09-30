import {noRanges} from "./noRanges";
import {OVER, IN_PROGRESS} from "./gStatusTypes";
import {getPieceTypeInstances} from "../../pieceType/getPieceTypeInstances";


export class GameStatus {
    /**
     * 
     * @param {*} board : game board object.
     * @param {*} ranges : ranges of pieces object.
     * @param {*} enemyColor : opposite color of play whos turn it is, used to declare winner.
     * @param {*} npck : shorthand for Number of Pieces Checking the King of player who's turn it is now.
     * 
     * the status of the game: OVER or IN_PROGRESS
     * the winner of the game: 'W', 'B', or '-' (neither)
     * the condition of the king of pla: 'check', 'checkmate', 'stalemate', or 'safe'
     * 
     */
    constructor(status) {
        this.status = status['status']
        this.condition = status['condition']
        this.winner = status['winner']
    }

    update(board, ranges, enemyColor, npck) {
        /**
         update the status of the game: OVER || IN_PROGRESS
         update the winner of the game: 'w', 'b', || '-' (neither)
         udpate the condition of the enemy king: 'check', 'checkmate', 'stalemate', || 'safe'
         :param board: dict, game board
         :param npck: int, number of pieces checking the king
         :param ranges: dict, ranges of pieces of color
         :param enemyColor: str, color of king
        */
        if (this.noRanges(ranges)) {
            if (npck > 0) {
                this.condition = 'checkmate'
                this.status = OVER
                this.winner =  enemyColor
            }
            else {
                this.condition = 'stalemate';
                this.status = OVER;
                this.winner = '-';
            }
            return
        }

        var pieceTypeInstances = getPieceTypeInstances(board);

        if (pieceTypeInstances.toString() === ['K', 'K'].toString()) {
            this.condition = 'stalemate';
            this.status = OVER;
            this.winner = '-';
        }

        else if (npck > 0) {
            this.condition = 'check';
            this.status = IN_PROGRESS;
            this.winner = '-';
        }
        
        else {
            this.condition = '';
            this.status = IN_PROGRESS;
            this.winner = '-';
        }
    }

    updateByObj(status) {
        /**update the game status directly by passing a status object */
        this.status = status['status']
        this.condition = status['condition']
        this.winner = status['winner']
    }

    getStatus() {
        return {
            'condition': this.condition,
            'status':this.status,
            'winner':this.winner,
        }
    }

    hasResigned() {
        if (this.condition === "resigned")
            return true
        else
            return false
    }

    noRanges(ranges) {
        for (var range of Object.values(ranges)) {
            if (range.length > 0)
                return false
        }
        return true
    }

}