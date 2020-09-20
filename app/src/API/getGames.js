import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function gamesFromDb(username) {
    var games = await firebase.database().ref().child('games').child('symLogicDMUS').once('value').then(function(snapshot) {
        return (snapshot.val())
    })
    return games;
}

export function getGames(username) {
    return Promise.all([gamesFromDb(username)])
}