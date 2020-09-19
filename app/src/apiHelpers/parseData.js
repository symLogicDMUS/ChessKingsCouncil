

import {getTurnData} from "./getTurnData";
import {Fen} from "../game_logic/fenParser/Fen";
import {getFenDict} from "../game_logic/fenParser/getFenDict";
import {getBoard} from "../game_logic/fenParser/getBoard/top/getBoard";
import {getFenData} from "../game_logic/fenParser/GameStatus/getFenData";
import {JsonRecords} from "../game_logic/JsonRecords/JsonRecords";
import {initPawnIds} from "../game_logic/JsonRecords/initPawnIds";
import {getAiColor} from "../game_logic/color/getAiColor";
import {getNextColor as getEnemyColor} from "../game_logic/color/getNextColor";


export function parseData(data) {
    /*called at start of new or saved game. Get first instance of turn data. parameters are data fetched from db
     * NOTE: data needed combined as single object. (this is why includes unmodified values status, promos, and type).
     * The method gathers all relavent data into single object and returns it.
    **/
    var [fen, records, playerColor, pieceDefs, idDict] = [data['fen'], data['json'], data['pt'], data['defs'], data['ids']]
    var board = getBoard(fen)
    var jsonRecords = new JsonRecords(initPawnIds(records, board))
    var [turn, castleAvail, enPassantAvail, hmNum, fmNum] = getFenData(fen)
    var fenObj = new Fen(getFenDict(fen, turn, castleAvail, enPassantAvail, hmNum, fmNum));
    var color = fenObj.turn.toUpperCase()
    var aiColor = getAiColor(playerColor)
    var turnData = getTurnData(board, color, aiColor, jsonRecords, pieceDefs, idDict)
    var enemyTurnData = getTurnData(board, getEnemyColor(color), aiColor, jsonRecords,  pieceDefs, idDict)
    return {
            'color': color,
            'board': board,
            'json_records': jsonRecords.getRecords(),
            'special_moves': turnData['special_moves'],
            'fen_data': fenObj.getData(),
            'piece_defs': pieceDefs,
            'id_dict': idDict,
            'ranges': turnData['ranges'],
            'enemy_ranges': enemyTurnData['ranges'],
            'ai_start': turnData['ai_start'],
            'ai_dest': turnData['ai_dest'],
            'ai_capture': turnData['ai_capture'],
            'status': data['status'],
            'promos': data['promos'],
            'type': data['type'],
            'pt': playerColor 
    }
} 

// module.exports = parseData;

/** for node.js
if (require.main === module) {
    let dataDict = getJson("../../testObjects/dataDicts/dd2.json")
    dataDict = initDdEmptyLists(dataDict)
    dataDict = ddOffsetStrsToList(dataDict)
    for (var gameName of Object.keys(dataDict)) {
        dataDict[gameName] = parseData(dataDict[gameName])
    }
    console.log("================================== records ==================================")
    for (var gameName of Object.keys(dataDict)) {
        console.log(gameName, ":")
        console.log(dataDict[gameName]['records'])
    }
    console.log("================================== board ==================================")
    for (var gameName of Object.keys(dataDict)) {
        console.log(gameName, ":")
        console.log(dataDict[gameName]['board'])
    }
    console.log("================================== moves ==================================")
    for (var gameName of Object.keys(dataDict)) {
        console.log(gameName, ":")
        console.log(dataDict[gameName]['moves'])
    }
    console.log("================================== ranges ==================================")
    for (var gameName of Object.keys(dataDict)) {
        console.log(gameName, ":")
        console.log(dataDict[gameName]['ranges'])
    }
    console.log("================================== enemyRanges ==================================")
    for (var gameName of Object.keys(dataDict)) {
        console.log(gameName, ":")
        console.log(dataDict[gameName]['enemyRanges'])
    }
    console.log("================================== aiStart ==================================")
    for (var gameName of Object.keys(dataDict)) {
        console.log(gameName, ":")
        console.log(dataDict[gameName]['aiStart'])
    }
    console.log("================================== aiDest ==================================")
    for (var gameName of Object.keys(dataDict)) {
        console.log(gameName, ":")
        console.log(dataDict[gameName]['aiDest'])
    }
    console.log("================================== aiCapture ==================================")
    for (var gameName of Object.keys(dataDict)) {
        console.log(gameName, ":")
    }

    console.log(dataDict[gameName]['aiCapture'])
}
*/

