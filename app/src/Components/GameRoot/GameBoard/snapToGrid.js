import {sqrSize} from "../../Reuseables/Board.jss";

export function snapToGrid(x, y, sqrSize) {
    const snappedX = Math.round(x / sqrSize) * sqrSize
    const snappedY = Math.round(y / sqrSize) * sqrSize
    return [snappedX, snappedY]
}
