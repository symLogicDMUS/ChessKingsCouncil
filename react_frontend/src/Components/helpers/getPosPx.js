import {rfToXy} from "./crdCnvrt";


export function getPosPx (rf, sqrSize, boardSize) {
    let [x, y] = rfToXy(rf);
    let left = (x - 1) * sqrSize;
    let top = boardSize - y * sqrSize;
    return {left: left, top: top}
}