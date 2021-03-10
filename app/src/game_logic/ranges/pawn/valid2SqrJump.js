import {getSqrCase} from "../../sqrCase/getSqrCase";
import {xyToRf} from "../../coordType/crdCnvrt"
import {EMPTY} from "../../sqrCase/sqrCases";
import {step_1sqr90d,  step_1sqr270d} from "../../helpers/stepFuncs";


export function valid2SqrJump(board, sqr, color, pawnHist) {
    /*get the square that might be a first move 2 square jump for pawn**/

    const id = board[xyToRf(...sqr)];
    let [x, y] = [...sqr];

    if (pawnHist[id].length !== 1) {
        return false
    }

    if (color === 'W') {
        [x, y] = step_1sqr90d(...sqr)
        if (getSqrCase(board, x, y, color) !== EMPTY) {
            return false
        }
        [x, y] = step_1sqr90d(x, y)
        if (getSqrCase(board, x, y, color) !== EMPTY) {
            return false
        }
    }

    else if (color === 'B') {
        [x, y] = step_1sqr270d(...sqr)
        if (getSqrCase(board, x, y, color) !== EMPTY) {
            return false
        }
        [x, y] = step_1sqr270d(x, y)
        if (getSqrCase(board, x, y, color) !== EMPTY) {
            return false
        }
    }

    else {
        console.log('error valid_2SqrJump.py: invalid color')
        return -1
    }

    return true
}

// module.exports = valid2SqrJump;
