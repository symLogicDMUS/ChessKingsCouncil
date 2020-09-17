

export function getStatusStr(fen) {
    /*method to strip the piece positions part of fen string, &&  return the remaining data**/
    let statusStr = fen.replace(`'([a-zA-Z1-8]+/*){8}`, '')
    statusStr.strip()
    return statusStr
}

// module.exports = getStatusStr;

/** for node.js
if (require.main === module) {


}
*/
