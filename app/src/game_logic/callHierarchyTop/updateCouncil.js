import {getAiColor} from "../color/getAiColor";
import {getNextColor as getEnemyColor} from "../color/getNextColor"
import { getTurnDataCouncil } from "./getTurnDataCouncil";


export function updateCouncil(board, jsonRecords, color, pt, pieceDefs, idDict) {
    const turnData = getTurnDataCouncil(board, color, getAiColor(pt), jsonRecords, pieceDefs, idDict);
    const enemyTurnData = getTurnDataCouncil(board, getEnemyColor(color), getAiColor(pt), jsonRecords, pieceDefs, idDict);
    turnData["enemy_ranges"] = enemyTurnData["ranges"];
    return turnData;
}