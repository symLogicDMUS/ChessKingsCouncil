import { getBinaryBoardAllFalse } from "../../../helpers/getBinaryBoardAllFalse";
import { stepFuncDict2 } from "../../../helpers/stepFuncs";
import { outOfBounds as oob } from "../../../helpers/oob";

function getSpanDisplay(spanDisplays, funcName, location) {
    const stepFunc = stepFuncDict2[funcName];
    let rf = stepFunc(location);
    while (!oob(rf)) {
        spanDisplays[rf] = true;
        rf = stepFunc(rf);
    }
    return spanDisplays;
}

export const getSpanDisplays = (spans, location) => {
    let spanDisplays = getBinaryBoardAllFalse();
    spans.forEach((funcName) => {
        spanDisplays = getSpanDisplay(spanDisplays, funcName, location);
    });
    return spanDisplays;
};
