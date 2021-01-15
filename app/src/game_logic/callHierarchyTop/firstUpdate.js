import {initPawnIds } from "../JsonRecords/initPawnIds"
import {JsonRecords} from "../JsonRecords/JsonRecords"
import {getTurnData} from "./getTurnData";
import {getAiColor} from "../color/getAiColor";
import {getNextColor as getEnemyColor} from "../color/getNextColor"


export function firstUpdate(board, records, color, pt, pieceDefs, idDict) {
    /**same as update but initialize json records */
    const jsonRecords = new JsonRecords(initPawnIds(records, board));
    const turnData = getTurnData(board, color, jsonRecords, pieceDefs, idDict);
    const enemyTurnData = getTurnData(board, getEnemyColor(color), jsonRecords, pieceDefs, idDict);
    turnData.enemyRanges = enemyTurnData.ranges
    return turnData;
}