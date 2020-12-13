import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deleteGameFromDb(gameName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return firebase.database().ref().child('games').child(uid).child(gameName).remove()
}

/**
 * For development only
 * @param gameName
 * @returns {Promise<Response>}
 */
async function deleteGameLocal(gameName) {
    return await fetch('/delete_game', {
        method: 'POST',
        body: JSON.stringify({
            'game_name':gameName
        })
    })
}

export function deleteGame(mode, gameName) {
    if (mode === 'production') return Promise.all([deleteGameFromDb(gameName)])
    else return Promise.all([deleteGameLocal()])
}