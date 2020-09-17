var  pprint  = require("pprint");
var  sampleBoardDicts  = require("gameLogic/testObjects/sampleBoardDicts");
const getRangeFunc = require("./getRangeFunc");


function getRangeDict(board) {
    /*initialize dict with let key = piece id &&  let value = range of piece**/
    let ranges = {}
    for (var id_ of Object.values(board)) {
        if (id_ === '#') {
            continue
        }
        else {
            ranges[id_] = []
        }
    }
    return ranges
}

module.exports = getRangeDict;

if (require.main === module) {
    let board = sampleBoardDicts['ranges_test']
    ranges = getRangeDict(board)
    console.log(ranges)
}
