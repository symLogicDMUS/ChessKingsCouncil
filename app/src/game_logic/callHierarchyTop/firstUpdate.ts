import { getNextColor as getEnemyColor } from "../color/getNextColor";
import { initPawnIds } from "../JsonRecords/initPawnIds";
import { JsonRecords } from "../JsonRecords/JsonRecords";
import { getTurnData } from "./getTurnData";
import PieceDef from "../types/PieceDef";
import IdDict from "../types/IdDict";
import Color from "../types/Color";
import Board from "../types/Board";

export function firstUpdate(board: Board, records, color: Color, pieceDefs: PieceDef [], idDict: IdDict) {
    /**same as update but initialize json records */
    const jsonRecords = new JsonRecords(initPawnIds(records, board));
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