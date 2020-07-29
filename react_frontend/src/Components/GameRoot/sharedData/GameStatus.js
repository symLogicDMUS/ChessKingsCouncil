
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
        this.gameStatus = status['status']
        this.condition = status['condition']
        this.winner = status['winner']
    }

    update(status) {
        this.gameStatus = status['status']
        this.condition = status['condition']
        this.winner = status['winner']
    }

    updateGameStatus(gameStatus) {
        this.gameStatus = gameStatus;
    }

    getStatus() {
        return {
            'condition': this.condition,
            'status':this.gameStatus,
            'winner':this.winner,
        }
    }

    noRanges(ranges) {
        for (var range of Object.values(ranges)) {
            if (range.length > 0)
                return false
        }
        return true
    }

}