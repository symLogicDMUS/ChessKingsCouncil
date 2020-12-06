
export function getRangeDict(board) {
    /*initialize dict with let key = piece id &&  let value = range of piece**/
    let ranges = {}
    for (const id of Object.values(board)) {
        if (id === '#') {
            continue
        }
        else {
            ranges[id] = []
        }
    }
    return ranges
}

// module.exports = getRangeDict;

/** for node.js
if (require.main === module) {
    let board = sampleBoardDicts['ranges_test']
    ranges = getRangeDict(board)
    console.log(ranges)

}
*/
