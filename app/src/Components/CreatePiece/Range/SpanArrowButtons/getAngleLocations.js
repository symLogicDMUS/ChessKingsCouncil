import {rfToXy, xyToRf} from "../../../helpers/crdCnvrt";

/**
'0d': right,
'45d': up_right,
'90d': up,
'135d': up_left,
'180d': left,
'225d': down_left,
'270d': down,
'315d': down_right,
* */
export const getAngleLocations = (pieceLoc) => {
    const [x, y] = rfToXy(pieceLoc);
    const angleLocations = {};
    angleLocations["135d"] = xyToRf(x - 1, y + 1);
    angleLocations["90d"] = xyToRf(x, y + 1);
    angleLocations["45d"] = xyToRf(x + 1, y + 1);
    angleLocations["180d"] = xyToRf(x - 1, y);
    angleLocations["0d"] = xyToRf(x + 1, y);
    angleLocations["225d"] = xyToRf(x - 1, y - 1);
    angleLocations["270d"] = xyToRf(x, y - 1);
    angleLocations["315d"] = xyToRf(x + 1, y - 1);
    return angleLocations;
};