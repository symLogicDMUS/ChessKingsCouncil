import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function gamesFromDb() {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var games = await firebase.database().ref().child('games').child(uid).once('value').then(function(snapshot) {
        return (snapshot.val())
    })
    return games;
}

export function getGames() {
    return Promise.all([gamesFromDb()])
}