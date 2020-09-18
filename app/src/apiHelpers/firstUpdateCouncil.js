import {JsonRecords} from "../game_logic/JsonRecords/JsonRecords"
import {initPawnIds} from "../game_logic/JsonRecords/initPawnIds";


export function firstUpdateCouncil(board, records, color, pt, pieceDefs, idDict) {
    /**not yet implemented for King's Council extention. same as firstUpdate() in firstUpdate.js */
    var jsonRecords = JsonRecords(initPawnIds(records, board))
    var turnData = getTurnData(board, color, getAiColor(pt), jsonRecords, pieceDefs, idDict)
    var enemyTurnData = getTurnData(board, getEnemyColor(color), getAiColor(pt), jsonRecords, pieceDefs. idDict)
    turnData['enemyRanges'] = enemyTurnData['ranges']
    return turnData;
}