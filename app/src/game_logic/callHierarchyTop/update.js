import { getTurnData } from "./getTurnData";
import { getAiColor } from "../color/getAiColor";
import { getNextColor as getEnemyColor } from "../color/getNextColor";

export function update(board, jsonRecords, color, pt, pieceDefs, idDict) {
    const turnData = getTurnData(board, color, getAiColor(pt), jsonRecords, pieceDefs, idDict);
    const enemyTurnData = getTurnData(board, getEnemyColor(color), getAiColor(pt), jsonRecords, pieceDefs, idDict);
    turnData["enemy_ranges"] = enemyTurnData["ranges"];
    return turnData;
}
