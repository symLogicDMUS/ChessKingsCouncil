import {
    step_1sqr45d,
    step_1sqr135d,
    step_1sqr315d,
    step_1sqr225d,
} from "../../helpers/stepFuncs";
import XY from "../../types/XY";
import Color from "../../types/Color";

export function getPotentialCaptures(sqr: XY, color: Color) {
    /*get the squares that the pawn of given color at sqr could potentially move to capture a piece**/
    const potentialPawnCaptures = [];
    if (color === "W") {
        potentialPawnCaptures.push(step_1sqr45d(...sqr));
        potentialPawnCaptures.push(step_1sqr135d(...sqr));
    } else if (color === "B") {
        potentialPawnCaptures.push(step_1sqr225d(...sqr));
        potentialPawnCaptures.push(step_1sqr315d(...sqr));
    } else {
        console.log("error: invalid color!");
    }
    return potentialPawnCaptures;
}