import {rfToXy} from "./crdCnvrt";


export function getPosPx (rf) {
    let [x, y] = rfToXy(rf);
    let left = `${(x - 1) * 12.5}%`;
    let top = `${100 - y * 12.5}%`;
    return {left: left, top: top}
}