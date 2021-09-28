import { ply } from "../helpers/ply";

export function getHypoBoard(board, start, dest) {
    /**get a temporary board where a move from start to dest has taken place. used to evaluate the would-be for that
        scenenario
    */
    var tempBoard, captured;
    tempBoard = JSON.parse(JSON.stringify(board));
    [tempBoard, captured] = ply(tempBoard, start, dest);
    return tempBoard;
}
