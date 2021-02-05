import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveGameDictToDb(gameDict) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('games').child(uid).update(gameDict)
}

export function saveGameDict(gameDict) {
    return Promise.all([saveGameDictToDb(gameDict)])
}