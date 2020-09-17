var  getPieceTypes  = require("../../pieceType/getPieceTypes");
const  {OVER, IN_PROGRESS}  = require("../../fenParser/GameStatus/gStatusTypes");


class GameStatus {

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
        if (! Object.values(any(ranges))) {
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

        let pieceTypes = getPieceTypes(board);

        if (pieceTypes === ['K', 'K']) {
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

    getStatus() {
        /* **/
        return {'status': this.status, 'condition': this.condition, 'winner': this.winner}
    }

}

module.exports = GameStatus;