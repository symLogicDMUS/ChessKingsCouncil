import { isPiece } from "../pieceType/isPiece";
import { xyToRf } from "../coordType/crdCnvrt";
import XY from "../types/XY";

export function ply(responseBoard, start: XY, dest: XY) {
    let captured = null;
    if (start.toString() === dest.toString()) return [responseBoard, null];
    if (isPiece(responseBoard[xyToRf(...dest)]))
        captured = responseBoard[xyToRf(...dest)];
    else captured = null;
    responseBoard[xyToRf(...dest)] = responseBoard[xyToRf(...start)];
    responseBoard[xyToRf(...start)] = "#";
    return [responseBoard, captured];
}

// module.exports = ply;
