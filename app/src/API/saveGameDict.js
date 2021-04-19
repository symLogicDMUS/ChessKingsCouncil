import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


export async function saveGameDictToDb(gameDict) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`games/${uid}`).update(gameDict)
    .catch((err) => {
        console.log(`ERROR: ${err}`)
    })
}

export function saveGameDict(gameDict) {
    return Promise.all([saveGameDictToDb(gameDict)])
}