import {sqrSize} from "../../Reuseables/Board.jss";

const xMapR = [null, "a", "b", "c", "d", "e", "f", "g", "h"];
const yMapUnitTop = [null, 7, 6, 5, 4, 3, 2, 1, 0];
const unitLeftMapX = [1, 2, 3, 4, 5, 6, 7, 8]
const unitTopMapY = [8, 7, 6, 5, 4, 3, 2, 1]

export function xyToRf(x, y) {
    const r = xMapR[x];
    const f = y.toString(10);
    return r + f;
}

export function rfToXy(rf) {
    const x = xMapR.indexOf(rf[0]);
    const y = Number(rf[1]);
    return [x, y];
}

export function xyToPx(x, y, sqrSize) {
    let left = (x-1)*sqrSize
    let top = yMapUnitTop[y]*sqrSize
    return [left, top]
}

/**
 * covert left and top to board with coordinates (x, y) ranging from (1, 1) to (8, 8)
 * @Parameters:
 * @param left: position left in px of current dragged item
 * @param top: position top in px of current dragged item
 * @param sqrSize: depends on screen size
 * @attributes:
 * @attr unitLeft: the position left if the board was 8px by 8px and each square was 1px by 1px
 * @attr: unitTop: the position top if the board was 8px by 8px and each square was 1px by 1px
 */
export function pxPosToXy(left, top, sqrSize) {
    let unitLeft = Math.round(left / (sqrSize));
    let unitTop = Math.round(top / (sqrSize));
    return [unitLeftMapX[unitLeft], unitTopMapY[unitTop]];
}

export default { xyToRf, rfToXy };