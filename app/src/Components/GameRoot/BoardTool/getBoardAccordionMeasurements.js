import {getBoardPos} from "../GameBoard/getBoardPos";
import {getSqrSize} from "../GameBoard/getSqrSize";

export function getBoardAccordionMeasurements() {
    const boardPos = getBoardPos()
    const {sqrSizeLg, sqrSizeSm} = getSqrSize()
    return {
        thin: {
            width: sqrSizeSm * 8,
            left: boardPos.thin.left,
            top: boardPos.thin.top + sqrSizeSm * 8,
        },
        wide: {
            width: sqrSizeLg * 8,
            left: boardPos.wide.left,
            top: boardPos.wide.top + sqrSizeLg * 8,
        },
    }
}