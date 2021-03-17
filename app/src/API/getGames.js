import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function getGamesFromDb() {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('games').child(uid).once('value').then(function (snapshot) {
        return (snapshot.val())
    });
}

export function getGames() {
    return Promise.all([getGamesFromDb()])
}