import { OVER, IN_PROGRESS } from "./gStatusTypes";
import { getPieceTypeInstances } from "../../pieceType/getPieceTypeInstances";
import { getNextColor as getEnemyColor } from "../../color/getNextColor";
import { numKings } from "../../council_logic/numKings";
import { numPawns } from "../../council_logic/numPawns";
import { onlyKings } from "../../council_logic/onlyKings";

export class GameStatus {
    /**
     *
     * the status of the game: OVER or IN_PROGRESS
     * the winner of the game: 'W', 'B', or '-' (neither)
     * the condition of the king of pla: 'check', 'checkmate', 'stalemate', or 'safe'
     *
     */
    constructor(status) {
        this.status = status.status;
        this.condition = status.condition;
        this.winner = status.winner;
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

        if (this.condition === "resigned") {
            return;
        }

        if (this.noRanges(ranges)) {
            if (npck > 0) {
                this.condition = "checkmate";
                this.status = OVER;
                this.winner = enemyColor;
            } else {
                this.condition = "stalemate";
                this.status = OVER;
                this.winner = "-";
            }
            return;
        }

        const pieceTypeInstances = getPieceTypeInstances(board);
        if (pieceTypeInstances.toString() === ["K", "K"].toString()) {
            this.condition = "stalemate";
            this.status = OVER;
            this.winner = "-";
        } else if (npck > 0) {
            this.condition = "check";
            this.status = IN_PROGRESS;
            this.winner = "-";
        } else {
            this.condition = "";
            this.status = IN_PROGRESS;
            this.winner = "-";
        }
    }

    updateCouncil(board, ranges, enemyColor, threatAreaLength) {
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
            this.condition = "checkmate";
            this.status = OVER;
            this.winner = enemyColor;
            return;
        }

        if (this.noRanges(ranges)) {
            if (threatAreaLength > 0) {
                this.condition = "checkmate";
                this.status = OVER;
                this.winner = enemyColor;
            } else {
                this.condition = "stalemate";
                this.status = OVER;
                this.winner = "-";
            }
            return;
        }

        const pieceTypeInstances = getPieceTypeInstances(board);
        if (onlyKings(pieceTypeInstances)) {
            this.condition = "stalemate";
            this.status = OVER;
            this.winner = "-";
        } else if (threatAreaLength > 0) {
            this.condition = "check";
            this.status = IN_PROGRESS;
            this.winner = "-";
        } else {
            this.condition = "";
            this.status = IN_PROGRESS;
            this.winner = "-";
        }
    }

    updateByObj(status) {
        /**update the game status directly by passing a status object */
        this.status = status["status"];
        this.condition = status["condition"];
        this.winner = status["winner"];
    }

    getStatus() {
        return {
            condition: this.condition,
            status: this.status,
            winner: this.winner,
        };
    }

    hasResigned() {
        return this.condition === "resigned";
    }

    noRanges(ranges) {
        for (const range of Object.values(ranges)) {
            if (range.length > 0) return false;
        }
        return true;
    }
}
