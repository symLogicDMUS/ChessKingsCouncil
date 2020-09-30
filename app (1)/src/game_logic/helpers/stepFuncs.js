/**
methods are numbered by, and order.includes(listed) of, degrees counterclockwise from x axis.
*/
export function step_1sqr0d(x, y) {
    /*step 1 square 0 degrees**/
    x += 1;
    return [x, y];
}

export function step_1sqr45d(x, y) {
    /*step 1 square 45 degrees**/
    x += 1;
    y += 1;
    return [x, y];
}

export function step_1sqr90d(x, y) {
    /*step 1 square 90 degrees**/
    y += 1;
    return [x, y];
}

export function step_1sqr135d(x, y) {
    /*step 1 square 135 degrees**/
    x -= 1;
    y += 1;
    return [x, y];
}

export function step_1sqr180d(x, y) {
    /*step 1 square 180 degrees**/
    x -= 1;
    return [x, y];
}

export function step_1sqr225d(x, y) {
    /*step 1 square 225 degrees**/
    x -= 1;
    y -= 1;
    return [x, y];
}

export function step_1sqr270d(x, y) {
    /*step 1 square 270 degrees**/
    y -= 1;
    return [x, y];
}

export function step_1sqr315d(x, y) {
    /*step 1 square 315 degrees**/
    x += 1;
    y -= 1;
    return [x, y];
}

export var angles = [
    "90d",
    "45d",
    "0d",
    "315d",
    "270d",
    "225d",
    "180d",
    "135d",
];

export var stepFuncDict = {
    "step_1sqr90d": step_1sqr90d,
    "step_1sqr45d": step_1sqr45d,
    "step_1sqr0d":  step_1sqr0d,
    "step_1sqr315d": step_1sqr315d,
    "step_1sqr270d": step_1sqr270d,
    "step_1sqr225d": step_1sqr225d,
    "step_1sqr180d": step_1sqr180d,
    "step_1sqr135d": step_1sqr135d,
};

// module.exports = {
//     step_1sqr90d,
//     step_1sqr45d,
//     step_1sqr0d,
//     step_1sqr315d,
//     step_1sqr270d,
//     step_1sqr225d,
//     step_1sqr180d,
//     step_1sqr135d,
//     stepFuncList,
//     stepFuncDict,
// };

/** for node.js
if (require.main === module) {
    import {strfind} from "./strfind";

    console.log(step_1sqr90d(4, 4).toString() === [4, 5].toString());
    console.log(step_1sqr45d(4, 4).toString() === [5, 5].toString());
    console.log(step_1sqr0d(4, 4).toString() === [5, 4].toString());
    console.log(step_1sqr315d(4, 4).toString() === [5, 3].toString());
    console.log(step_1sqr270d(4, 4).toString() === [4, 3].toString());
    console.log(step_1sqr225d(4, 4).toString() === [3, 3].toString());
    console.log(step_1sqr180d(4, 4).toString() === [3, 4].toString());
    console.log(step_1sqr135d(4, 4).toString() === [3, 5].toString());

}
*/
