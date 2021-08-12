import { snapToGrid as doSnapToGrid } from "./snapToGrid";
import { pxPosToXy, xyToRf } from "./DndCrdCnvrt";

export const getCoords = (item, delta, sqrSize) => {
    let startLeft = item.left;
    let startTop = item.top;
    let destLeft = Math.round(item.left + delta.x);
    let destTop = Math.round(item.top + delta.y);

    [startLeft, startTop] = doSnapToGrid(startLeft, startTop, sqrSize);
    [destLeft, destTop] = doSnapToGrid(destLeft, destTop, sqrSize);

    let [startX, startY] = pxPosToXy(startLeft, startTop, sqrSize);
    let [destX, destY] = pxPosToXy(destLeft, destTop, sqrSize);

    let start = xyToRf(startX, startY);
    let dest = xyToRf(destX, destY);

    return [start, dest, destLeft, destTop];
};
