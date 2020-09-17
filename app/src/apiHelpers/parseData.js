

import {getTurnData} from "./getTurnData";
import {ddOffsetStrsToList} from "./ddOffsetStrsToList";
import {initDdEmptyLists} from "./initDdEmptyLists";
import {Fen} from "../game_logic/fenParser/Fen";
import {getBoard} from "../game_logic/fenParser/getBoard/top/getBoard";
import {getFenData} from "../game_logic/fenParser/GameStatus/getFenData";
import {JsonRecords} from "../game_logic/JsonRecords/JsonRecords";
import {initPawnIds} from "../game_logic/JsonRecords/initPawnIds";
import {getAiColor} from "../game_logic/color/getAiColor";
import {mapXyToRf} from "../game_logic/coordType/rankfile/mapXyToRf";
import {mapRfToXy} from "../game_logic/coordType/xy/mapRfToXy";
import {getNextColor} from "../game_logic/color/getNextColor";
import {getJson} from "../game_logic/testObjects/getJson";


export function parseData(data) {
    /*called at start of new or saved game. Get first instance of turn data. parameters are data fetched from db**/
    let [fen, records, playerColor, pieceDefs, idDict] = [data['fen'], data['json'], data['pt'], data['defs'], data['ids']]
    let board = getBoard(fen)
    let jsonRecords = JsonRecords(initPawnIds(mapRfToXy(records), board))
    let [turn, castleAvail, enPassantAvail, hmNum, fmNum] = getFenData(fen)
    let fenObj = Fen(fen, turn, castleAvail, enPassantAvail, hmNum, fmNum)
    let color = fenObj.turn.upper()
    let aiColor = getAiColor(playerColor)
    let turnData = getTurnData(board, color, aiColor, jsonRecords, pieceDefs, idDict)
    let enemyTurnData = getTurnData(board, getEnemyColor(color), aiColor, jsonRecords,  pieceDefs, idDict)
    let payload = {
               'color': color,
               'board': mapXyToRf(board),
               'records': mapXyToRf(jsonRecords.getRecords()),
               'fenData': fenObj.getData(),
               'pieceDefs': pieceDefs,
               'idDict': idDict,
               'moves': turnData['moves'],
               'ranges': turnData['ranges'],
               'enemyRanges': enemyTurnData['ranges'],
               'aiStart': turnData['aiStart'],
               'aiDest': turnData['aiDest'],
               'aiCapture': turnData['aiCapture'],
               'status': data['status'],
               'promos': data['promos'],
               'type': data['type'],
               'pt': playerColor }
    return payload
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

}
*/
        console.log(dataDict[gameName]['aiCapture'])

