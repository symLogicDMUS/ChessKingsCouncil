import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


function getGameDataFromDb(username, gameName) {
    var gameData = await firebase.database.ref().child('games').child('symLogicDMUS').once('value').then(function (snapshot) {
        var gameData = snapshot.val();
        gameData['defs'] = initEmptyRanges(gameData['defs'])
        gameData['defs'] = offsetStrsToList(gameData['defs'])
        gameData = parseData(gameData)
        return gameData
    })
    return gameData
}

export function getGame(username, gameName) {
    return Promise.all([getGameDataFromDb(username, gameName)])
}