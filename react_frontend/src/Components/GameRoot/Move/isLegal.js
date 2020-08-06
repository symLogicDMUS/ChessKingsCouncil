import {OVER} from "../../helpers/gStatusTypes";


export function isLegal(gameroot, item, dest) {
    /*return true if piece with id at location start can move to dest, otherwise false**/

    //if the color of the piece isnt current turn
    if (item.type[0] !== gameroot.turn)
        return false

    //if the game is over
    if (gameroot.gameStatus.gameStatus === OVER)
        return false


    let id_ = gameroot.board[item.pos]

    if (! gameroot.ranges[id_].includes(dest)) {
        return false
    }

    return true

}
