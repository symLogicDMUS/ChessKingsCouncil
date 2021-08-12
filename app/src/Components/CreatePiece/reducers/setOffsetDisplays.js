import { rfToXy, xyToRf } from "../../helpers/crdCnvrt";

export const setOffsetDisplays = (newState) => {
    let [x1, y1] = rfToXy(newState.location);
    let [dx, dy] = [-1, -1];
    newState.offsets.forEach((xy) => {
        dx = x1 + xy[0];
        dy = y1 + xy[1];
        newState.offsetDisplays[xyToRf(dx, dy)] = true;
    });
};
