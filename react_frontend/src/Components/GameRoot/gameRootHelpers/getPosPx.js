import {rfToXy} from "../../helpers/crdCnvrt";


export function getPosPx (rf) {
    let [x, y] = rfToXy(rf);
    let left = (x - 1) * 75;
    let top = 600 - y * 75;
    return {left: left, top: top}
}