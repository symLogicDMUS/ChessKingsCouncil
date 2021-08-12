import { getColor } from "../../../game_logic/color/getColor";
import { OVER } from "../../helpers/gStatusTypes";

export function isInRange(gameRoot, rf) {
    /**differs from top-level isLegal function because not working with Dnd objects, and is used to determine if to
     * highlight a square as part of range of piece being dragged return true if piece with id at location start can
     * move to dest, otherwise false.
     * */

    //if the color of the piece isn't current turn
    if (getColor(gameRoot.board[rf]) !== gameRoot.turn) return false;

    //if the game is over
    if (gameRoot.gameStatus.status === OVER) return false;

    let id = gameRoot.board[rf];

    if (!gameRoot.ranges[id].includes(rf)) {
        return false;
    }

    return true;
}
