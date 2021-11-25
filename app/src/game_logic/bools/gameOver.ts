import Status from "../types/Status";

export function gameOver(status): boolean {
    /*returns true if jsonRecords indicates the game is over, else false **/
    return status === Status.OVER;
}

// module.exports = gameOver;
