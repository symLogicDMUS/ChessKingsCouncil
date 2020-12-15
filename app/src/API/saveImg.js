import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";


async function saveImgToDb(imgName, imgBase64Str) {
    const user = firebase.auth().currentUser;
    const uid = user.uid;
    return await firebase.database().ref().child('images').child(uid).update({[imgName]: imgBase64Str})
}


export function saveImg(imgName, imgBase64Str) {
    return Promise.all([saveImgToDb(imgName, imgBase64Str)])
}