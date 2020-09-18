

export function getStatusStr(fen) {
    /*method to strip the piece positions part of fen string, &&  return the remaining data**/
    let statusStr = fen.replace(/([a-zA-Z1-8]+\/){7}([a-zA-Z1-8]+)/gi, '')
    statusStr = statusStr.trim()
    return statusStr
}

// '8/8/3k4/rnbq1bnr/8/RNBQ1BNR/8/1RBRK3 w - - 0 1'

// module.exports = getStatusStr;

/** for node.js
if (require.main === module) {


}
*/
