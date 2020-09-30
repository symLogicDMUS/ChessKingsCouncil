import "./crdCnvrt";
import { rfToXy } from "./crdCnvrt";

export function getOffset(rf2, rf1) {
    let [x1, y1] = rfToXy(rf1);
    let [x2, y2] = rfToXy(rf2);
    let y = y2 - y1;
    let x = x2 - x1;
    return [x, y];
}