import { xyToRf } from "../../coordType/crdCnvrt";
import Board from "../../types/Board";
import Coord from "../../types/Coord";

export function setupBoard(board: Board, posList): Board {
    /*fenParser task 7, for each new key, get the next the.includes(id) list**/
    let i = 0;
    for (let y = 1; y < 9; y++) {
        for (let x = 1; x < 9; x++) {
            board[xyToRf(x as Coord, y as Coord)] = posList[i];
            i += 1;
        }
    }
    return board;
}