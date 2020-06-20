import {rfToXy} from "../../helpers/crdCnvrt";


export function getPosPx (rf) {
    let [x, y] = rfToXy(rf);
    let left = (x - 1) * 100;
    let top = 800 - y * 100;
    return {left: left, top: top}
}