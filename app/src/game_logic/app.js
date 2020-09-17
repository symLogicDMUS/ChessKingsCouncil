import { getNextColor } from "gameLogic/color/getNextColor";
import { JsonRecords } from "gameLogic/JsonRecords/JsonRecords";
import { getFen } from "gameLogic/fenParser/getFen/top/getFen";
import { mapRfToXy } from "gameLogic/coordType/xy/mapRfToXy";
import { getAiColor } from "gameLogic/color/getAiColor";
import { getFullFen } from "gameLogic/fenParser/getFullFen";
import { offsetStrsToList } from "apiHelpers/offsetStrsToList";
import { gameDefsOffsetListsToStrs } from "apiHelpers/gameDefsOffsetListsToStrs";
import { ddOffsetStrsToList } from "apiHelpers/ddOffsetStrsToList";
import { initEmptyRanges } from "apiHelpers/initEmptyRanges";
import { initDdEmptyLists } from "apiHelpers/initDdEmptyLists";
import { idAssign } from "apiHelpers/idAssign_/top/idAssign";
import { getTurnData } from "apiHelpers/getTurnData";
import { parseData } from "apiHelpers/parseData";


export function update(data) {
    /*update the ranges of pieces and the state of the game and return to React **/
    [board, records] = mapRfToXy(data['board']), mapRfToXy(data['records'])
    color, [aiColor, pieceDefs, idDict] =  data['color'], getAiColor(data['pt']), data['pieceDefs'], data['idDict']
    let jsonRecords = JsonRecords(records)  // pawn hist ids prev initialized
    let turnData = getTurnData(board, color, aiColor, jsonRecords, pieceDefs, idDict)
    let enemyTurnData = getTurnData(board, getEnemyColor(color), aiColor, jsonRecords, pieceDefs, idDict)
    turnData.update({'enemyRanges': enemyTurnData['ranges']})
    return turnData
}


export function updateCouncil(data) {
    /* **/
    //TODO: implement same as update except updated for game with multiple kings
}


export function assignIds(pieceNames, subs) {
    /**called by NewGame component on the front end. create id:piece-name arrangement unique to new game. substitute
    custom-piece(s) for of Rook, Bishop, Knight, or Queen, by assigning its usual id to the custom-piece name and
    custom-piece range-def. add custom pieces selected to be a pawn promotion choice.
    */
    let [pieceNames, subs] = [data['names'], data['subs']]
    let pieceNames = idAssign(pieceNames, subs)
    return pieceNames
}


export function getDataDict(username) {
    /*get all the saved game data at the start of the game**/
    let dataDict = db.reference().child('games').child(username).get()
    dataDict = initDdEmptyLists(dataDict)
    dataDict = ddOffsetStrsToList(dataDict)
    for (var gameName of Object.keys(dataDict)) {
        dataDict[gameName] = parseData(dataDict[gameName])
    }
}


export function getDefs(username) {
    /*get the JSON object inside defs.json**/

    let defs = db.reference().child('defs').child(username).get()
    defs = initEmptyRanges(defs)
    defs = offsetStrsToList(defs)
    return defs
}


export function saveDef(username, pieceName, piecedDef) {
    /*save a piece definition to defs.json**/
    offsetsToStrs({pieceName, pieceDef})
    db.reference().child('defs').child(username).update(offsetsToStrs({pieceName, pieceDef}))
    return ["SUCCESSFULLY SAVED PIECE!", 201]
}


export function deleteDef(data) {
    /*deleting a piece definition from defs.json**/
    db.reference().child('defs').child(username).child(pieceName).delete()
    return ["SUCCESSFULLY DELETED PIECE", 200]
}


export function save(data) {
    /**save information about game as a db collection with documents being the different types of information
    gameName: name of the game being saved.
    board: data describing game board.
    jsonRecords: data for special moves and other things (the dict, not the object)
    idDict: key is id for piece, name is name of piece.
    rangefunctions { describes how each piece can move
    success or failure integer and message to backend.
    */

    let fen = getFen(mapRfToXy(data['board']))
    fen = getFullFen(fen, fenObj)
    let gameName = data['gameName']
    db.reference().child('games').child(data['username']).update({gameName: {
        'fen': fen,
        'type': data['gameType'],
        'pt': data['playerType'],
        'status': data['status'],
        'promos': data['promos'],
        'json': data['jsonRecords'],
        'defs': data['defs'],
        'ids': data['idDict']
    }})
    return ["SUCCESSFULLY SAVED GAME!", 200]
}



export function getGameNames(username) {
    /* **/
    let gameNames = db.reference().child('game names').child(username).get()
    return gameNames
}


export function getGame(username, gameName) {
    /* **/
    let gameData = db.reference().child('games').child('{}'.format(username)).child('{}'.format(gameName)).get()
    gameData['defs'] = initEmptyRanges(gameData['defs'])
    gameData['defs'] = offsetStrsToList(gameData['defs'])
    gameData = parseData(gameData)
    return gameData
}
