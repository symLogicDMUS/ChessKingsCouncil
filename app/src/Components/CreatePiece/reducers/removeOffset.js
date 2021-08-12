import { rfToXy } from "../../helpers/crdCnvrt";

export const removeOffset = (newState, rf) => {
    newState.offsetDisplays[rf] = false;
    let [x1, y1] = rfToXy(newState.location);
    let [x2, y2] = rfToXy(rf);
    let offset = [x2 - x1, y2 - y1];
    let offsetStrs = newState.offsets.map((o) => JSON.stringify(o));
    let i = offsetStrs.indexOf(JSON.stringify(offset));
    newState.offsets.splice(i, 1);
};
