import {getBinaryBoarAllFalse} from "../../helpers/getBinaryBoardAllFalse";
import {stepFuncDict2} from "../../helpers/stepFuncs";
import {outOfBounds as oob} from "../../helpers/oob";

function getSpanDisplay(spanDisplays, funcName, location) {
    console.log('funcName', funcName)
    const stepFunc = stepFuncDict2[funcName];
    console.log('stepFunc', stepFunc)
    let rf = stepFunc(location);
    while (!oob(rf)) {
        spanDisplays[rf] = true;
        rf = stepFunc(rf);
    }
    return spanDisplays;
}

export const getSpanDisplays = (spans, location) => {
    let spanDisplays = getBinaryBoarAllFalse();
    spans.forEach(funcName => {
        spanDisplays = getSpanDisplay(spanDisplays, funcName, location);
    });
    return spanDisplays;
}