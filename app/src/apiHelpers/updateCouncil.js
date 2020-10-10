import {getAiColor} from "../game_logic/color/getAiColor";
import {getNextColor as getEnemyColor} from "../game_logic/color/getNextColor"
import { getTurnDataCouncil } from "./getTurnDataCouncil";


export function updateCouncil(board, jsonRecords, color, pt, pieceDefs, idDict) {
    var turnData = getTurnDataCouncil(board, color, getAiColor(pt), jsonRecords, pieceDefs, idDict)
    var enemyTurnData = getTurnDataCouncil(board, getEnemyColor(color), getAiColor(pt), jsonRecords, pieceDefs, idDict)
    turnData["enemy_ranges"] = enemyTurnData["ranges"];
    return turnData;
}