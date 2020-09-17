var  gStatusTypes = require("../fenParser/GameStatus/gStatusTypes");
const OVER = gStatusTypes.OVER;


function gameOver(status) {
    /*returns true if jsonRecords indicates the game is over, else false **/
    if (status === OVER) {
        return true
    }
    else {
        return false
    }
}

module.exports = gameOver;