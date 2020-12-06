import {gStatusTypes} from "../fenParser/GameStatus/gStatusTypes";
const OVER = gStatusTypes.OVER;


export function gameOver(status) {
    /*returns true if jsonRecords indicates the game is over, else false **/
    return status === OVER;
}

// module.exports = gameOver;