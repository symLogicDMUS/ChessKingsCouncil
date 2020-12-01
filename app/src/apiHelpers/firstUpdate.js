import {initPawnIds } from "../game_logic/JsonRecords/initPawnIds"
import {JsonRecords} from "../game_logic/JsonRecords/JsonRecords"
import {getTurnData} from "./getTurnData";
import {getAiColor} from "../game_logic/color/getAiColor";
import {getNextColor as getEnemyColor} from "../game_logic/color/getNextColor"


export function firstUpdate(board, records, color, pt, pieceDefs, idDict) {
    /**same as update but initialize json records */
    const jsonRecords = new JsonRecords(initPawnIds(records, board));
    const turnData = getTurnData(board, color, getAiColor(pt), jsonRecords, pieceDefs, idDict);
    const enemyTurnData = getTurnData(board, getEnemyColor(color), getAiColor(pt), jsonRecords, pieceDefs, idDict);
    turnData['enemyRanges'] = enemyTurnData['ranges']
    return turnData;
}