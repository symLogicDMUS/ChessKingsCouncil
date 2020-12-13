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

/**
 * For  development only
 * @returns {Promise<Response>}
 */
async function getGamesLocal() {
    let response = await fetch('/get_games')
    return response.json()
}

export function getGames(mode) {
    if (mode === 'production') return Promise.all([getGamesFromDb()])
    return Promise.all([getGamesLocal()])
}