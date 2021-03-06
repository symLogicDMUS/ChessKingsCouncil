/**
methods are numbered by, and listed in order of, degrees counterclockwise from x axis.
*/
import { rfToXy, xyToRf } from "./crdCnvrt";

export function step1sqr0d(rf) {
    /*step 1 square 0 degrees**/
    let [x, y] = rfToXy(rf);
    x += 1;
    rf = xyToRf(x, y);
    return rf;
}
export function step1sqr45d(rf) {
    /*step 1 square 45 degrees**/
    let [x, y] = rfToXy(rf);
    x += 1;
    y += 1;
    rf = xyToRf(x, y);
    return rf;
}
export function step1sqr90d(rf) {
    /*step 1 square 90 degrees**/
    let [x, y] = rfToXy(rf);
    y += 1;
    rf = xyToRf(x, y);
    return rf;
}
export function step1sqr135d(rf) {
    /*step 1 square 135 degrees**/
    let [x, y] = rfToXy(rf);
    x -= 1;
    y += 1;
    rf = xyToRf(x, y);
    return rf;
}
export function step1sqr180d(rf) {
    /*step 1 square 180 degrees**/
    let [x, y] = rfToXy(rf);
    x -= 1;
    rf = xyToRf(x, y);
    return rf;
}
export function step1sqr225d(rf) {
    /*step 1 square 225 degrees**/
    let [x, y] = rfToXy(rf);
    x -= 1;
    y -= 1;
    rf = xyToRf(x, y);
    return rf;
}
export function step1sqr270d(rf) {
    /*step 1 square 270 degrees**/
    let [x, y] = rfToXy(rf);
    y -= 1;
    rf = xyToRf(x, y);
    return rf;
}
export function step1sqr315d(rf) {
    /*step 1 square 315 degrees**/
    let [x, y] = rfToXy(rf);
    x += 1;
    y -= 1;
    rf = xyToRf(x, y);
    return rf;
}
//export const stepFuncList = [step1sqr90d, step1sqr45d, step1sqr0d, step1sqr315d, step1sqr270d,
//                           step1sqr225d, step1sqr180d, step1sqr135d]

export const stepFuncDict = {
    "90d": step1sqr90d,
    "45d": step1sqr45d,
    "0d": step1sqr0d,
    "315d": step1sqr315d,
    "270d": step1sqr270d,
    "225d": step1sqr225d,
    "180d": step1sqr180d,
    "135d": step1sqr135d,
};

export const stepFuncDict2 = {
    step_1sqr90d: step1sqr90d,
    step_1sqr45d: step1sqr45d,
    step_1sqr0d: step1sqr0d,
    step_1sqr315d: step1sqr315d,
    step_1sqr270d: step1sqr270d,
    step_1sqr225d: step1sqr225d,
    step_1sqr180d: step1sqr180d,
    step_1sqr135d: step1sqr135d,
};

