import { getTurnData } from "./getTurnData";
import { getNextColor as getEnemyColor } from "../color/getNextColor";
import PieceDef from "../types/PieceDef";
import IdDict from "../types/IdDict";
import Color from "../types/Color";
import Board from "../types/Board";

export function update(board: Board, jsonRecords, color: Color, pt: string, pieceDefs: PieceDef [], idDict: IdDict) {
    const turnData = getTurnData(board, color, jsonRecords, pieceDefs, idDict);
    const enemyTurnData = getTurnData(
        board,
        getEnemyColor(color),
        jsonRecords,
        pieceDefs,
        idDict
    );
    turnData["enemyRanges"] = enemyTurnData.ranges;
    return turnData;
}
