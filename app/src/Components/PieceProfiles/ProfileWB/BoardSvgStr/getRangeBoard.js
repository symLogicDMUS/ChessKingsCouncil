import {getBinaryBoarAllFalse} from "../../../helpers/getBinaryBoardAllFalse";
import {stepFuncDict2} from "../../../helpers/stepFuncs";
import {outOfBounds} from "../../../helpers/oob";
import {rfToXy, xyToRf} from "../../../helpers/crdCnvrt";

export const getRangeBoard = (range, rangeType, location) => {
    let stepFunc, rf;
    let spans = getBinaryBoarAllFalse();
    let offsets = getBinaryBoarAllFalse();
    switch (rangeType) {
        case "span":
            for (const funcName of range) {
                stepFunc = stepFuncDict2[funcName];
                rf = location;
                rf = stepFunc(rf);
                while (!outOfBounds(rf)) {
                    spans[rf] = true;
                    rf = stepFunc(rf);
                }
            }
            return spans;
        case "offset":
            let [x1, y1] = rfToXy(location);
            let [dx, dy] = [-1, -1];
            range.forEach((xy) => {
                dx = x1 + xy[0];
                dy = y1 + xy[1];
                offsets[xyToRf(dx, dy)] = true;
            });
            return offsets;
        default:
            throw new Error();
    }
};