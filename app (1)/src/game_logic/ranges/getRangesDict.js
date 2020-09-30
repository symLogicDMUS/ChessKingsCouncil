import {pprint} from "pprint";
import {sampleBoardDicts} from "gameLogic/testObjects/sampleBoardDicts";
import {getRangeFunc} from "./getRangeFunc";


export function getRangeDict(board) {
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

// module.exports = getRangeDict;

/** for node.js
if (require.main === module) {
    let board = sampleBoardDicts['ranges_test']
    ranges = getRangeDict(board)
    console.log(ranges)

}
*/
