import { getColor } from "../../../color/getColor";
import { getPotential1SqrJump } from "../../pawn/getPotential1SqrJump";

export function isPawnMove(board, start, dest) {
    const color = getColor(board[xyToRf(...start)]);

    const oneSqrJump = getPotential1SqrJump(start, color);
    if (oneSqrJump.toString() === dest.toString()) return true;

    let leftCapture;
    if (color === "W") leftCapture = [start[0] - 1, start[1] + 1];
    else leftCapture = [start[0] - 1, start[1] - 1];
    if (leftCapture.toString() === dest.toString()) return true;

    let rightCapture;
    if (color === "W") rightCapture = [start[0] + 1, start[1] + 1];
    else rightCapture = [start[0] + 1, start[1] - 1];
    return rightCapture.toString() === dest.toString();
}
