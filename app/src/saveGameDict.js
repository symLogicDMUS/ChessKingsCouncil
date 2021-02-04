import * as firebase from "firebase";

async function saveGameDictToDb(dataDict) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).update(dataDict)
}

export function saveGameDict(dataDict) {
    return Promise.all([saveGameDictToDb(dataDict)])
}