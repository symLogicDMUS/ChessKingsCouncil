import {stepFuncDict} from "../../helpers/stepFuncs";
import {outOfBounds as oob} from "../../helpers/oob";
import {removeOffset} from "./removeOffset";

export const toggleSpan = (newState, angle) => {
    newState.spans[angle] = !newState.spans[angle];
    const stepFunc = stepFuncDict[angle];
    let rf = stepFunc(newState.location);
    while (!oob(rf)) {
        newState.spanDisplays[rf] = newState.spans[angle];
        if (newState.offsetDisplays[rf]) {
            removeOffset(newState, rf);
        }
        rf = stepFunc(rf);
    }
};