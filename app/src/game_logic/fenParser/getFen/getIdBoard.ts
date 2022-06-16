import { getDigits } from "./getDigits";
import { xyToRf } from "../../coordType/crdCnvrt";
import Board from "../../types/Board";
import Coord from "../../types/Coord";

export function getIdBoard(board: Board) {
    /*getFen TASK 1, takes board as input, &&  return board as list of lists where each list is a row**/
    let idBoard = [];
    let row = [];
    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            row.push(board[xyToRf(x as Coord, y as Coord)]);
        }
        idBoard.unshift(row);
        row = [];
    }
    return idBoard;
}