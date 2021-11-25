import { outOfBounds } from "../sqrCase/oob";
import { xyToRf } from "../coordType/crdCnvrt";
import Stepper from "../types/Stepper";

export function getPath(board, x, y, takeStep: Stepper) {
    /**
     travel a path starting at location (x, y) until step out of bounds. add assignIds
     to list. direction moving depends on which step function takeStep is
     */
    let rf, id;
    const sqrList = [];
    [x, y] = takeStep(x, y);
    while (!outOfBounds(x, y)) {
        rf = xyToRf(x, y);
        id = board[rf];
        sqrList.push(id);
        [x, y] = takeStep(x, y);
    }
    return sqrList;
}