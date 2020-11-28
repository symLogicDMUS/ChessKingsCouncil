import {getColor} from "../../../game_logic/color/getColor";
import {OVER} from "../../helpers/gStatusTypes";

export function isInRange(gameroot, rf) {
    /**differs from top-level isLegal function because not working with Dnd objects, and is used to determine if to
     * highlight a square as part of range of piece being dragged return true if piece with id at location start can
     * move to dest, otherwise false.
     * */

    //if the color of the piece isn't current turn
    if (getColor(gameroot.board[rf]) !== gameroot.turn)
        return false

    //if the game is over
    if (gameroot.gameStatus.status === OVER)
        return false

    let id = gameroot.board[rf]

    if (! gameroot.ranges[id].includes(rf)) {
        return false
    }

    return true

}
