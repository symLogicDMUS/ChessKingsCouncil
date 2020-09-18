import {initEmptyRanges} from "../apiHelpers/initEmptyRanges";
import {offsetStrsToList} from "../apiHelpers/offsetStrsToList";
import {parseData} from "../apiHelpers/parseData"
import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function getGameDataFromDb(username, gameName) {
    var gameData = await firebase.database().ref().child('games').child(username).child(gameName).once('value').then(function (snapshot) {
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