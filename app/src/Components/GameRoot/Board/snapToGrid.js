export const sqrSize = 64;
export const boardSize = sqrSize * 8;

export function snapToGrid(x, y) {
    const snappedX = Math.round(x / sqrSize) * sqrSize
    const snappedY = Math.round(y / sqrSize) * sqrSize
    return [snappedX, snappedY]
}
