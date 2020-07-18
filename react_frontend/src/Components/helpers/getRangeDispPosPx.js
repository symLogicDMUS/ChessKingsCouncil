import {rfToXy} from "./crdCnvrt";

export function getRangeDispPosPx (rf) {
    let [x, y] = rfToXy(rf);
    let left = (x - 1) * 20;
    let top = 160 - y * 20;
    return {left: left, top: top}
}