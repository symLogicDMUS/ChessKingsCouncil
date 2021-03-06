import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveImgDictToDb(imgDict) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).update(imgDict)
}

export function saveImgDict(imgDict) {
    return Promise.all([saveImgDictToDb(imgDict)])
}