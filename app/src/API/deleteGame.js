import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

async function deleteGameFromDb(gameName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return firebase.database().ref().child('games').child(uid).child(gameName).remove()
}


export function deleteGame(gameName) {
    return Promise.all([deleteGameFromDb(gameName)])
}