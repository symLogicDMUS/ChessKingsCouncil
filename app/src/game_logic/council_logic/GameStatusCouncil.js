import {OVER, IN_PROGRESS} from "../fenParser/GameStatus/gStatusTypes";
import {getPieceTypeInstances} from "../pieceType/getPieceTypeInstances";
import {getNextColor as getEnemyColor} from "../color/getNextColor";
import {onlyKings} from './onlyKings';
import {numPawns} from './numPawns';
import {numKings} from "./numKings";

export class GameStatusCouncil {
    /**
     * 
     * @param {*} board : game board object.
     * @param {*} ranges : ranges of pieces object.
     * @param {*} enemyColor : opposite color of play whos turn it is, used to declare winner.
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

    update(board, ranges, enemyColor, threatAreaLength) {
        /**
         update the status of the game: OVER || IN_PROGRESS
         update the winner of the game: 'w', 'b', || '-' (neither)
         udpate the condition of the enemy king: 'check', 'checkmate', 'stalemate', || 'safe'
         :param board: dict, game board
         :param npck: int, number of pieces checking the king
         :param ranges: dict, ranges of pieces of color
         :param enemyColor: str, color of king
        */

       const color = getEnemyColor(enemyColor);

       if (numKings(board, color) === 0 && numPawns(board, color) === 0) {
           this.condition = 'checkmate'
           this.status = OVER
           this.winner =  enemyColor
           return
       }

        if (this.noRanges(ranges)) {
            if (threatAreaLength > 0) {
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
        if (onlyKings(pieceTypeInstances)) {
            this.condition = 'stalemate';
            this.status = OVER;
            this.winner = '-';
        }
        
        else if (threatAreaLength > 0) {
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