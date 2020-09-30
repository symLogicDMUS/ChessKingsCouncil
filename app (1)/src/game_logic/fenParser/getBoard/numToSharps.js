import {emptySqrHash} from "./emptySqrHash";
import {isdigit} from "../../helpers/isdigit";


export function numToSharps(posStr) {
    /**fenParser task 2, converts every digit encountered to that many consecutive '#' chars
        posStr: the position part of the fen string
        returns list of sqrs
    */
    let newPosStr = ''
    for (var sqr of posStr) {
        if (isdigit(sqr)) {
             newPosStr += emptySqrHash[parseInt(sqr, 10)]
        }
        else {
            newPosStr += sqr
        }
    }
    return newPosStr
}

// module.exports = numToSharps;

/** for node.js
if (require.main === module) {
    // test 1:
    console.log("test 1:")
    newPosStr = numToSharps('RNBQKBNRPPPPPPPP8888pppppppprnbqkbnr')
    console.log(newPosStr)
    console.log("\n")

    // test 3:
    console.log("test 3:")
    newPosStr = numToSharps('b2q2q13R1R22NP4q1QK1QBr83P1P2q2r2P13k3b')
    console.log(newPosStr)
    console.log("\n")

}
*/