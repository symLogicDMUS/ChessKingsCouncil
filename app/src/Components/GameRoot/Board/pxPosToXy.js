import {sqrSize} from "./snapToGrid";

/**
 * covert left and top to board with coordinates (x, y) ranging from (1, 1) to (8, 8)
 * @param left position left in px of current dragged item
 * @param top position top in px of current dragged item
 */
export function pxPosToXy (left, top) {
    let x = Math.round(left/(sqrSize));
    let y = Math.round(top/(sqrSize));
    return [x, y];
}