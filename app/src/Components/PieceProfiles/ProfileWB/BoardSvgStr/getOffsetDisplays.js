import { getBinaryBoardAllFalse } from "../../../helpers/getBinaryBoardAllFalse";
import { rfToXy, xyToRf } from "../../../helpers/crdCnvrt";

export const getOffsetDisplays = (offsets, location) => {
    const offsetDisplays = getBinaryBoardAllFalse();
    let [x1, y1] = rfToXy(location);
    let [dx, dy] = [-1, -1];
    offsets.forEach((xy) => {
        dx = x1 + xy[0];
        dy = y1 + xy[1];
        offsetDisplays[xyToRf(dx, dy)] = true;
    });
    return offsetDisplays;
};
