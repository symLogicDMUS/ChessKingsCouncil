import { outOfBounds } from "../sqrCase/oob";
import { xyToRf } from "../coordType/crdCnvrt";

export function getPiecesOnPath(board, x, y, takeStep) {
    /**
    travel a path starting at location (x, y) until step out of bounds. add each
    piece id encountered to list
    */
    [x, y] = takeStep(x, y);
    let pieceList = [];
    while (!outOfBounds(x, y)) {
        if (board[xyToRf(x, y)] !== "#") {
            pieceList.push(board[xyToRf(x, y)]);
        }
        [x, y] = takeStep(x, y);
    }
    return pieceList;
}