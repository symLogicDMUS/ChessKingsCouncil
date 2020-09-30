const [OVER, IN_PROGRESS] = [0, 1];
var getPieceTypes = require("../../../helpers/tests/getPieceTypes")

class GameStatus {
    constructor(status) {
        this.status = status['status']
        this.condition = status['condition']
        this.winner = status['winner']
    }

    noRanges(ranges) {
        for (var range of Object.values(ranges)) {
            if (range.length > 0)
                return false
        }
        return true
    }

    /**
     * 
     * @param {*} board : game board object
     * @param {*} ranges : ranges of pieces
     * @param {*} enemyColor : opposite color of play whos turn it is
     * @param {*} npck : number of pieces checking king of player who's turn it is
     * 
     * update the status of the game: OVER or IN_PROGRESS
     * update the winner of the game: 'W', 'B', or '-' (neither)
     * update the condition of the 'enemy' king: 'check', 'checkmate', 'stalemate', or 'safe'
     * 
     */
    update(board, ranges, enemyColor, npck) {

        if (this.noRanges(ranges)) {
            if (npck > 0) {
                this.condition = 'checkmate'
                this.status = OVER;
                this.winner = enemyColor;
            }
            else {
                this.condition = 'stalemate';
                this.status = OVER;
                this.winner = '-';
            }
        }
        else if (getPieceTypes(board) === ['K', 'K']) {
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

}

module.exports = GameStatus;

if (require.main === module) {

    let gameStatus = new GameStatus({status:IN_PROGRESS, condition:'', winner:'-'});

    /*test 1*/
    let board =  {'a1': 'BQ1','a2': '#','a3': '#','a4': '#','a5': '#','a6': 'BR2','a7': '#','a8': '#',
                  'b1': '#','b2': '#','b3': '#','b4': '#','b5': '#','b6': '#','b7': '#','b8': '#',
                  'c1': '#','c2': '#','c3': '#','c4': '#','c5': '#','c6': '#','c7': '#','c8': '#',
                  'd1': '#','d2': '#','d3': '#','d4': '#','d5': '#','d6': '#','d7': 'BN1','d8': '#',
                  'e1': '#','e2': '#','e3': '#','e4': '#','e5': '#','e6': '#','e7': 'BP1','e8': '#',
                  'f1': 'BR1','f2': '#','f3': '#','f4': '#','f5': '#','f6': 'WK1','f7': '#','f8': 'BR3',
                  'g1': '#','g2': '#','g3': '#','g4': '#','g5': '#','g6': '#','g7': 'BP2','g8': 'BK1',
                  'h1': '#','h2': '#','h3': '#','h4': 'BB1','h5': '#','h6': '#','h7': '#','h8': '#'};
    let ranges = {'WK1': []}
    gameStatus.update(board, ranges, 'W', 7)
    console.log(gameStatus)

    /*test 2*/
    board = {'a1': '#','a2': 'BR1','a3': '#','a4': 'BB2','a5': '#','a6': '#','a7': '#','a8': '#',
            'b1': '#','b2': '#','b3': '#','b4': '#','b5': '#','b6': '#','b7': '#','b8': '#',
            'c1': '#','c2': '#','c3': 'BN1','c4': '#','c5': '#','c6': '#','c7': '#','c8': '#',
            'd1': '#','d2': '#','d3': '#','d4': '#','d5': '#','d6': '#','d7': '#','d8': 'BR2',
            'e1': 'WK1','e2': '#','e3': '#','e4': '#','e5': '#','e6': '#','e7': '#','e8': '#',
            'f1': '#','f2': '#','f3': '#','f4': '#','f5': '#','f6': '#','f7': '#','f8': 'BK1',
            'g1': '#','g2': '#','g3': 'BN2','g4': '#','g5': '#','g6': '#','g7': '#','g8': '#',
            'h1': '#','h2': '#','h3': 'BB1','h4': '#','h5': '#', 'h6': '#','h7': '#','h8': '#'};
    ranges = {'WK1': []}
    gameStatus.update(board, ranges, 'W', 0)
    console.log(gameStatus)
}

