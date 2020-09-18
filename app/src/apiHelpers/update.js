import {getTurnData} from "./getTurnData";
import {getAiColor} from "../game_logic/color/getAiColor";
import {getNextColor as getEnemyColor} from "../game_logic/color/getNextColor"


export function update(board, jsonRecords, color, pt, pieceDefs, idDict) {
    var turnData = getTurnData(board, color, getAiColor(pt), jsonRecords, pieceDefs, idDict)
    var enemyTurnData = getTurnData(board, getEnemyColor(color), getAiColor(pt), jsonRecords, pieceDefs, idDict)
    turnData['enemy_ranges'] = enemyTurnData['ranges']
    return turnData;
}