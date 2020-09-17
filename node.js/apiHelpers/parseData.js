

const getTurnData = require("./getTurnData");
const ddOffsetStrsToList = require("./ddOffsetStrsToList");
const initDdEmptyLists = require("./initDdEmptyLists");
const Fen = require("../fenParser/Fen");
const getBoard = require("../fenParser/getBoard/top/getBoard");
const getFenData = require("../fenParser/GameStatus/getFenData");
const JsonRecords = require("../JsonRecords/JsonRecords");
const initPawnIds = require("../JsonRecords/initPawnIds");
const getAiColor = require("../color/getAiColor");
const mapXyToRf = require("../coordType/rankfile/mapXyToRf");
const mapRfToXy = require("../coordType/xy/mapRfToXy");
const getNextColor = require("../color/getNextColor");
const getJson = require("../testObjects/getJson");


function parseData(data) {
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

module.exports = parseData;

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
        console.log(dataDict[gameName]['aiCapture'])

