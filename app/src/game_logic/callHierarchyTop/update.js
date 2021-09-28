import { getTurnData } from "./getTurnData";
import { getNextColor as getEnemyColor } from "../color/getNextColor";

export function update(board, jsonRecords, color, pt, pieceDefs, idDict) {
    const turnData = getTurnData(board, color, jsonRecords, pieceDefs, idDict);
    const enemyTurnData = getTurnData(
        board,
        getEnemyColor(color),
        jsonRecords,
        pieceDefs,
        idDict
    );
    turnData.enemyRanges = enemyTurnData.ranges;
    return turnData;
}
