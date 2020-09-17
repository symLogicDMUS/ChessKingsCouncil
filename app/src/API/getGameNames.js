import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function gameNamesFromDb(username) {
    var gameNames = await firebase.database().ref().child('game names').child('symLogicDMUS').once('value').then(function(snapshot) {
        return (snapshot.val())
    })
    return gameNames;
}

export function getGameNames(username) {
    return Promise.all([gameNamesFromDb(username)])
}