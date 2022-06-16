import { xyToRf } from "../coordType/crdCnvrt";
import { step_1sqr0d, step_1sqr180d } from "../helpers/stepFuncs";
import { isEnemyPawn } from "./isEnemyPawn";
import Board from "../types/Board";
import Rankfile from "../types/Rankfile";
import Color from "../types/Color";

export function aiEnPassantMove(
    responseBoard: Board,
    start: Rankfile,
    dest: Rankfile,
    color: Color,
    specialMoves
) {
    if (!specialMoves.isEnPassant([start, dest])) {
        return [responseBoard, null];
    }

    let captured;

    let [x, y] = step_1sqr0d(start[0], start[1]);
    if (isEnemyPawn(responseBoard, x, y, color)) {
        captured = responseBoard[xyToRf(x, y)];
        responseBoard[xyToRf(x, y)] = "#";
        return [responseBoard, captured];
    }

    [x, y] = step_1sqr180d(start[0], start[1]);
    if (isEnemyPawn(responseBoard, x, y, color)) {
        captured = responseBoard[xyToRf(x, y)];
        responseBoard[xyToRf(x, y)] = "#";
        return [responseBoard, captured];
    }

    console.log("error: pawn not found");
    return [responseBoard, null];
}
