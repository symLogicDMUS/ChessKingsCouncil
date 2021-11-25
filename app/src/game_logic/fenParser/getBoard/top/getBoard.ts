import { getPosStr } from "../getPosStr";
import { getTravStr } from "../getTravStr";
import { numToSharps } from "../numToSharps";
import { posStrToList } from "../posStrToList";
import { convertIds } from "../convertId";
import { addDigitToId } from "../addDigitToId";
import { initBoard } from "../initBoard";
import { setupBoard } from "../setupBoard";
import Board from "../../../types/Board";

export function getBoard(fen: string): Board {
    /*takes a fen string as input, &&  returns a board dict **/
    let str = getPosStr(fen);
    str = getTravStr(str);
    str = numToSharps(str);
    let list = posStrToList(str);
    list = convertIds(list);
    list = addDigitToId(list);
    var board = initBoard();
    board = setupBoard(board, list);
    return board;
}