import "./crdCnvrt";
import { rfToXy, xyToRf } from "./crdCnvrt";

export function subtractRf(rf1, rf2) {
    let [x1, y1] = rfToXy(rf1);
    let [x2, y2] =  rfToXy(rf2);
    let y = y2 - y1
    let x = x2 - x1;
    let rf = xyToRf(x, y);
    return rf;
}