import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

async function getDoesGameExistInDb(gameName) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('games').child(uid).child(gameName).once('value').then(function (snapshot) {
        return snapshot.exists()
    })
}

export function getDoesGameExist(gameName) {
    return Promise.all([getDoesGameExistInDb(gameName)])
}