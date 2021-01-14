import {OVER} from "../../helpers/gStatusTypes";


export function isLegal(gameRoot, item, start, dest) {
    /*return true if piece with id at location start can move to dest, otherwise false**/

    //if the color of the piece isn't current turn
    if (item.type[0] !== gameRoot.turn) {
        return false
    }

    //if the game is over
    if (gameRoot.gameStatus.status === OVER) {
        return false
    }

    let id = gameRoot.board[start]

    if (! gameRoot.ranges[id].includes(dest)) {
        return false
    }

    return true

}
