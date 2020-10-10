import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveImgToDb(imgDict) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).update(imgDict)
}


export function saveImgDict(imgDict) {
    return Promise.all([saveImgToDb(imgDict)])
}