import {snapToGrid as doSnapToGrid} from "./snapToGrid";
import {pxPosToXy} from "./pxPosToXy";
import {xyToRf} from "./crdCnvrt";

export const getCoords = (item, delta) => {
    let startLeft = item.left;
    let startTop = item.top;
    let destLeft = Math.round(item.left + delta.x);
    let destTop = Math.round(item.top + delta.y);

    [startLeft, startTop] = doSnapToGrid(startLeft, startTop);
    [destLeft, destTop] = doSnapToGrid(destLeft, destTop);

    let [startX, startY] = pxPosToXy(startLeft, startTop);
    let [destX, destY] = pxPosToXy(destLeft, destTop);

    let start = xyToRf(startX, startY);
    let dest = xyToRf(destX, destY);

    return [start, dest, destLeft, destTop];
};