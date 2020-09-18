import {getTurnData} from "./getTurnData";
import {getAiColor} from "../game_logic/color/getAiColor";
import {getNextColor as getEnemyColor} from "../game_logic/color/getNextColor"


export function updateCouncil(board, jsonRecords, color, pt, pieceDefs, idDict) {
    /**
     * The King's Council extention of game has not yet been updated. This method is currently the same as update() from update.js
     */
    var turnData = getTurnData(board, color, getAiColor(pt), jsonRecords, pieceDefs, idDict)
    var enemyTurnData = getTurnData(board, getEnemyColor(color), getAiColor(pt), jsonRecords, pieceDefs. idDict)
    turnData['enemyRanges'] = enemyTurnData['ranges']
    return turnData;
}