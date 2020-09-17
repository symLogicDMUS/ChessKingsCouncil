import {getAngle} from "./getAngle";


export function getSpansDict(stepFuncs) {

    const spans = {
        "90d" :false,
        "45d" :false,
        "0d"  :false,
        "315d":false,
        "270d":false,
        "225d":false,
        "180d":false,
        "135d":false
    }

    let angle = null;
    for (var stepFunc of stepFuncs) {
        angle = getAngle(stepFunc);
        spans[angle] = true;
    }

    return spans;

}