import {getAiColor} from "../color/getAiColor";
import {getNextColor as getEnemyColor} from "../color/getNextColor"
import { getTurnDataCouncil } from "./getTurnDataCouncil";


export function updateCouncil(board, jsonRecords, color, pt, pieceDefs, idDict) {
    const turnData = getTurnDataCouncil(board, color, jsonRecords, pieceDefs, idDict);
    const enemyTurnData = getTurnDataCouncil(board, getEnemyColor(color), jsonRecords, pieceDefs, idDict);
    turnData.enemyRanges = enemyTurnData.ranges;
    return turnData;
}