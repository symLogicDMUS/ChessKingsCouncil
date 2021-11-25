import { ply } from "../helpers/ply";
import Board from "../types/Board";
import XY from "../types/XY";

export function getHypoBoard(board: Board, start: XY, dest: XY) {
    /**get a temporary board where a move from start to dest has taken place. used to evaluate the would-be for that
     scenario
     */
    let tempBoard, captured;
    tempBoard = JSON.parse(JSON.stringify(board));
    [tempBoard, captured] = ply(tempBoard, start, dest);
    return tempBoard;
}