import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import {mapUrlCharsToValidKeyChars} from "./mapUrlCharsToValidKeyChars";

async function saveImgToDb(imgName, imgUrl) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child(`images/${uid}`).update({[imgName]: imgUrl})
}

async function saveRefToDb(imgUrl) {
        const user = firebase.auth().currentUser;
        const uid = user.uid;
        const imgUrlEscaped = mapUrlCharsToValidKeyChars(imgUrl)
        return await firebase.database().ref().child(`img_refs/${uid}`).update({[imgUrlEscaped]: 1});
}

export function saveImg(imgName, imgUrl) {
        return Promise.all([saveImgToDb(imgName, imgUrl), saveRefToDb(imgUrl)])
}