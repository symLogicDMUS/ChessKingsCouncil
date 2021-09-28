import {vectors} from "./vectors";
import {spansSquares} from "./spansSquares";

export const getNewArrowChunksBoard = (arrowChunksBoard, spanDisplays, pieceLoc, angle) => {
    const squares = spansSquares[pieceLoc][angle];
    const svg = vectors[pieceLoc][angle];
    for (let rf of Object.keys(spanDisplays)) {
        if (spanDisplays[rf] && squares.includes(rf)) {
            arrowChunksBoard[rf] = svg;
        }
    }
    return arrowChunksBoard;
}