import {stepFuncDict} from "../../helpers/stepFuncs";
import {outOfBounds as oob} from "../../helpers/oob";

export const setDisplaySpan = (newState, angle) => {
    const stepFunc = stepFuncDict[angle];
    let rf = stepFunc(newState.location);
    while (!oob(rf)) {
        newState.spanDisplays[rf] = true;
        rf = stepFunc(rf);
    }
};