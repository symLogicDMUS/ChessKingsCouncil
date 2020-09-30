import {step_1sqr90d, step_1sqr270d} from "../../helpers/stepFuncs";

export function get2SqrJump(sqr, color) {
    /*at this point it has been determined that there is a 2 square jump available so now get it**/
    var x, y;
    switch(color) {
        case 'W':
            [x, y] = step_1sqr90d(...sqr);
            [x, y] = step_1sqr90d(x, y);
            break;
        case 'B':
            [x, y] = step_1sqr270d(...sqr);
            [x, y] = step_1sqr270d(x, y);
            break;
        default:
            console.log('error: invalid color')
            [x, y] = [-1, -1]
            break;
    }

    return [x, y];
}

// module.exports = get2SqrJump;

/** for node.js
if (require.main === module) {
    console.log(get2SqrJump([1, 2], 'W'))
    console.log(get2SqrJump([3, 7], 'B'));

}
*/