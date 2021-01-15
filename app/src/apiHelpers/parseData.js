import {getTurnData} from "../game_logic/callHierarchyTop/getTurnData";
import {getTurnDataCouncil} from "../game_logic/callHierarchyTop/getTurnDataCouncil";
import {Fen} from "../game_logic/fenParser/Fen";
import {getFenDict} from "../game_logic/fenParser/getFenDict";
import {getBoard} from "../game_logic/fenParser/getBoard/top/getBoard";
import {getFenData} from "../game_logic/fenParser/GameStatus/getFenData";
import {JsonRecords} from "../game_logic/JsonRecords/JsonRecords";
import {initPawnIds} from "../game_logic/JsonRecords/initPawnIds";
import {getNextColor as getEnemyColor} from "../game_logic/color/getNextColor";

/**
 * called at start of new or saved game. Get first instance of turn data. parameters are data fetched from db
 * NOTE: data needed combined as single object. (this is why includes unmodified values status, promos, and type).
 * The method gathers all relevant data into single object and returns it.
 */
export function parseData(data) {
    const [fen, records, playerColor, pieceDefs, idDict] = [
        data.fen,
        data.json,
        data.pt,
        data.defs,
        data.ids,
    ];
    const board = getBoard(fen);
    const jsonRecords = new JsonRecords(initPawnIds(records, board));
    const [turn, castleAvail, enPassantAvail, hmNum, fmNum] = getFenData(fen);
    const fenObj = new Fen(getFenDict(fen, turn, castleAvail, enPassantAvail, hmNum, fmNum));
    const color = fenObj.turn.toUpperCase();
    const enemyColor = getEnemyColor(color);

    let turnData, enemyTurnData;
    if (data.type === "council") {
        turnData = getTurnDataCouncil(board, color, jsonRecords, pieceDefs, idDict);
        enemyTurnData = getTurnDataCouncil(board, enemyColor, jsonRecords, pieceDefs, idDict);
    } else {
        turnData = getTurnData(board, color, jsonRecords, pieceDefs, idDict);
        enemyTurnData = getTurnData(board, enemyColor, jsonRecords, pieceDefs, idDict);
    }

    return {
        color: color,
        board: board,
        json_records: jsonRecords.getRecords(),
        special_moves: turnData.special_moves,
        fen_data: fenObj.getData(),
        piece_defs: pieceDefs,
        id_dict: idDict,
        ranges: turnData.ranges,
        enemy_ranges: enemyTurnData.ranges,
        status: data.status,
        promos: data.promos,
        type: data.type,
        pt: playerColor,
    };
}
