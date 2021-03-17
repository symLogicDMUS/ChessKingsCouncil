import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";

async function getDoesImgUrlExistInDb(imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl)
    return await firebase.database().ref().child('img_refs').child(uid).child(imgUrlEscaped).once('value').then(function (snapshot) {
        return snapshot.exists()
    })
}

export function getDoesImgUrlExist(imgUrl) {
    return Promise.all([getDoesImgUrlExistInDb(imgUrl)])
}